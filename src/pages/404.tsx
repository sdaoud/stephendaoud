import React from "react";
import Layout from "../components/layout";
import { Box, Text } from "theme-ui";
import Main from "../components/main";
import { Stack } from "raam";
import Link from "../components/link";
import { Helmet } from "react-helmet";

const NotFoundPage: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>Page Not Found</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨‍💻</text></svg>"
        />
      </Helmet>
      <Main>
        <Stack gap="l">
          <Box as="span" role="img" aria-label="Pensive emoji">
            😔
          </Box>
          <Text as="p" variant="epsilon">
            Not found
          </Text>
          <Text as="p">
            That page doesn't exist. Return <Link to="/">home</Link>.
          </Text>
        </Stack>
      </Main>
    </Layout>
  );
};

export default NotFoundPage;
