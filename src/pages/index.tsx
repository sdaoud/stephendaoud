import * as React from "react";
import Layout from "../components/layout";
import { Text, Link, Avatar } from "theme-ui";
import Main from "../components/main";
import { Stack } from "raam";
import Profile from "../images/avatar.jpg";
import Portrait from "../images/portrait.jpg";
import IconText from "../components/iconText";
import {
  Accel,
  Palantir,
  Adidas,
  EcotricitySimple,
  NHS,
  CabinetOffice,
  Google,
} from "../icons/logos";
import { Helmet } from "react-helmet";

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>Stephen Daoud</title>
        <meta
          name="description"
          content="Stephen Daoud, senior software engineer in the UK."
        />

        <meta property="og:title" content="Stephen Daoud" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://stephendaoud.co.uk" />
        <meta
          property="og:description"
          content="Stephen Daoud, senior software engineer in the UK."
        />
        <meta property="og:image" content={Portrait} />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨‍💻</text></svg>"
        />
      </Helmet>
      <Main>
        <Stack gap="l">
          <Avatar src={Profile} />
          <Text as="p" variant="epsilon">
            Hi, I'm Stephen Daoud. I'm a senior software engineer living in the
            UK. I enjoy finding meaningful solutions to complex problems through
            code and have been working in the tech industry for 10 years.
          </Text>
          <Text as="p">
            I specialise in robust Python systems and performant Javascript
            applications and have had the privilege of working with some
            fantastic companies including
            <IconText icon={<Google />}>Google</IconText>,{" "}
            <IconText icon={<CabinetOffice />}>Cabinet Office</IconText>,{" "}
            <IconText icon={<NHS />}>NHS England</IconText>,{" "}
            <IconText icon={<EcotricitySimple />}>Ecotricity</IconText>,{" "}
            <IconText icon={<Adidas />}>Adidas</IconText>,{" "}
            <IconText icon={<Palantir />}>Palantir</IconText> and{" "}
            <IconText icon={<Accel />}>Accel</IconText>.
          </Text>
          <Text as="p">
            After hours, I have various side projects that mainly focus on med
            tech.
          </Text>
          <Text as="p">
            I also like cycling, music, sci-fi and board games.
          </Text>
          <Text as="p">
            Connect with me over{" "}
            <Link href="mailto:steve@stephendaoud.co.uk">Email</Link> or on{" "}
            <Link
              href="https://www.linkedin.com/in/stephendaoud/"
              target="_blank"
            >
              LinkedIn
            </Link>
            .
          </Text>
        </Stack>
      </Main>
    </Layout>
  );
};

export default IndexPage;
