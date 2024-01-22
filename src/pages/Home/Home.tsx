import {
  TextInput,
  UnstyledButton,
  Badge,
  Text,
  Group,
  ActionIcon,
  Tooltip,
  rem,
  Kbd,
} from "@mantine/core";
import {
  IconBulb,
  IconUser,
  IconCheckbox,
  IconSearch,
  IconPlus,
} from "@tabler/icons-react";
import classes from "./Home.module.css";

import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

import { DemoCard } from "../../components/Card";
import { Outlet } from "react-router-dom";
import { UserButton } from "../../components/UserButton";

import useStore from "../../store";

const collections = [
  { emoji: "👍", label: "Sales" },
  { emoji: "🚚", label: "Deliveries" },
  { emoji: "💸", label: "Discounts" },
  { emoji: "💰", label: "Profits" },
  { emoji: "✨", label: "Reports" },
  { emoji: "🛒", label: "Orders" },
  { emoji: "📅", label: "Events" },
  { emoji: "🙈", label: "Debts" },
  { emoji: "💁‍♀️", label: "Customers" },
];

export function Home() {
  const count = useStore((state) => state.count);

  const links = [
    { icon: IconBulb, label: "Activity", notifications: count },
    { icon: IconCheckbox, label: "Tasks", notifications: count },
    { icon: IconUser, label: "Contacts" },
  ];
  const mainLinks = links.map((link) => (
    <UnstyledButton key={link.label} className={classes.mainLink}>
      <div className={classes.mainLinkInner}>
        <link.icon size={20} className={classes.mainLinkIcon} stroke={1.5} />
        <span>{link.label}</span>
      </div>
      {link.notifications && (
        <Badge size="sm" variant="filled" className={classes.mainLinkBadge}>
          {link.notifications}
        </Badge>
      )}
    </UnstyledButton>
  ));

  const collectionLinks = collections.map((collection) => (
    <a
      href="#"
      onClick={(event) => event.preventDefault()}
      key={collection.label}
      className={classes.collectionLink}
    >
      <span style={{ marginRight: rem(9), fontSize: rem(16) }}>
        {collection.emoji}
      </span>{" "}
      {collection.label}
    </a>
  ));

  return (
    <PanelGroup autoSaveId="persistence" direction="horizontal">
      <Panel defaultSize={25} collapsible minSize={5} maxSize={35}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            padding: "6px",
          }}
        >
          <nav className={classes.navbar}>
            <div className={classes.section}>
              <UserButton />
            </div>

            <TextInput
              placeholder="Search"
              leftSection={
                <IconSearch
                  style={{ width: rem(12), height: rem(12) }}
                  stroke={1.5}
                />
              }
              rightSectionWidth={70}
              rightSection={<Kbd>Ctrl + K</Kbd>}
              styles={{ section: { pointerEvents: "none" } }}
              mb="sm"
            />

            <div className={classes.section}>
              <div className={classes.mainLinks}>{mainLinks}</div>
            </div>

            <div className={classes.section}>
              <Group
                className={classes.collectionsHeader}
                justify="space-between"
              >
                <Text size="xs" fw={500} c="dimmed">
                  Collections
                </Text>
                <Tooltip label="Create collection" withArrow position="right">
                  <ActionIcon variant="default" size={18}>
                    <IconPlus
                      style={{ width: rem(12), height: rem(12) }}
                      stroke={1.5}
                    />
                  </ActionIcon>
                </Tooltip>
              </Group>
              <div className={classes.collections}>{collectionLinks}</div>
            </div>
            <DemoCard />
          </nav>
        </div>
      </Panel>
      <PanelResizeHandle
        style={{
          width: "8px",
          display: "flex",
          backgroundColor: "gray",
          cursor: "ew-resize",
          touchAction: "none",
          userSelect: "none",
        }}
      />
      <Panel defaultSize={75}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Outlet />
        </div>
      </Panel>
    </PanelGroup>
  );
}
