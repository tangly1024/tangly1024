import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import H5 from "@material-tailwind/react/Heading5";
import DefaultNavbar from "components/DefaultNavbar";
import SimpleFooter from "components/SimpleFooter";
import Page from "components/login/Page";
import Container from "components/login/Container";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const CusdisComponent = dynamic(
  () => {    return import("react-cusdis").then((m) => m.ReactCusdis);},
  { ssr: false }
);

export default function Login() {
    const router = useRouter()
    console.log(router)
  return (
    <Page>
      <DefaultNavbar />
      <Container>
        <Card>
          <CardHeader color="lightBlue">
            <H5 color="white" style={{ marginBottom: 0 }}>
              留言
            </H5>
          </CardHeader>

          <CardBody>
            <script defer src="https://cusdis.com/js/widget/lang/zh-cn.js" />
            
            <div className="m-10">
              <CusdisComponent
                attrs={{
                  host: 'https://cusdis.com',
                  appId: '445ba48e-f751-487f-b22f-cdbe3310d28f',
                  pageId: 'contact',
                  pageTitle: 'Contact US',
                  pageUrl: 'https://www.tangly1024.com/contact'
                }}
                lang={'zh-CN'}
              />
            </div>
          </CardBody>
        </Card>
      </Container>
      <SimpleFooter />
    </Page>
  );
}
