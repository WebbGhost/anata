// import { useAuth } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";

const Page = () => {
  // const { isSignedIn } = useAuth();
  const isSignedIn = true;

  if (isSignedIn) return <Redirect href="/(tabs)/profile" />;

  return <Redirect href='/(auth)/welcome' />;
};

export default Page;