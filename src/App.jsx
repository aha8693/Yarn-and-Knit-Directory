import { useMemo, useState } from "react";
import { Box, Button, Container, Heading, HStack, Text } from "@chakra-ui/react";
import { ProjectTab } from "./components/ProjectTab";
import { YarnClosetTab } from "./components/YarnClosetTab";
import { InterestedProjectsTab } from "./components/InterestedProjectsTab";

const tabs = [
  { id: "projects", label: "Project" },
  { id: "yarn", label: "Yarn Closet" },
  { id: "interested", label: "Interested Project" },
];

export default function App() {
  const [activeTab, setActiveTab] = useState("projects");

  const activePanel = useMemo(() => {
    if (activeTab === "projects") return <ProjectTab />;
    if (activeTab === "yarn") return <YarnClosetTab />;
    return <InterestedProjectsTab />;
  }, [activeTab]);

  return (
    <Box className="app-root">
      <Container maxW="container.xl" className="app-container" p={0}>
        <Box className="app-header">
          <Box className="app-header-content">
            <Box>
              <Text className="app-kicker">Authenticated View</Text>
              <Heading as="h1" size="lg" className="app-title">
                Yarn and Knit Directory
              </Heading>
            </Box>
          </Box>
        </Box>

        <HStack className="app-tabs" spacing={2} align="stretch">
          {tabs.map((tab) => (
            <Button
              className={tab.id === activeTab ? "app-tab app-tab-active" : "app-tab app-tab-inactive"}
              key={tab.id}
              size="sm"
              variant="ghost"
              colorScheme="gray"
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </Button>
          ))}
        </HStack>

        <Box className="app-main">{activePanel}</Box>
      </Container>
    </Box>
  );
}
