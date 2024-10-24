import GitHub from "@auth/express/providers/github";
import Google from "@auth/express/providers/google";
import PingId from "@auth/express/providers/ping-id";
import User from "../models/AuthUsers";

export const authConfig = {
  trusthost: true,
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
      issuer: "https://github.com",
    }),
    PingId({
      clientId: process.env.AUTH_PING_ID_ID,
      clientSecret: process.env.AUTH_PING_ID_SECRET,
      issuer:
        "https://auth.pingone.com.au/895fedf0-caf8-4e08-9b71-b907a7b756c4/as",
    }),
  ],

  callbacks: {
    async signIn({
      account,
      profile,
   
    }: {
      account: any;
      profile?: any;
     
    }): Promise<boolean> {
      try {
        let user = await User.findOne({
          providerId: profile.id || account.providerAccountId,
        });

        if (!user) {
          user = new User({
            email: profile.email,
            name: profile.name || profile.displayName || profile.login,
            provider: account.provider,
            providerId: profile.id || account.providerAccountId,
          });
          await user.save();
        }

        return true;
      } catch (error) {
        console.error("Error during sign-in:", error);
        return false;
      }
    },

    async redirect({ url }: { url: string | { url: string } }) {
      const redirectUrl = typeof url === "string" ? url : url.url;
      const appBaseUrl = `http://localhost:5173/`;
      if (redirectUrl.startsWith("/")) return `${appBaseUrl}/home`;
      return appBaseUrl;
    },
  },
};
