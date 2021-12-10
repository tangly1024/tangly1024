import H2 from "@material-tailwind/react/Heading2";
import LeadText from "@material-tailwind/react/LeadText";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

export default function Header() {
  return (
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen">
      <div className="bg-landing-background bg-cover bg-center absolute top-0 w-full h-full" />
      <div className="container max-w-8xl relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <H2 color="white">唐风集里，收卷波澜。</H2>
            <div className="text-gray-200">
              <LeadText color="gray-200">欢迎访问我的主页</LeadText>
              
            </div>
            <div className="flex">
            <a rel="noreferrer" href="https://blog.tangly1024.com" className="mx-auto">
                <Button
                  color="transparent"
                  className="bg-white text-black ml-4"
                  ripple="dark"
                >
                  <Icon name="description" size="2xl" />
                  BLOG
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
