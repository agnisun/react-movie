import { Tabs } from "antd";

import { Search } from "../widgets/search";
import { Rated } from "../widgets/rated";
import "./css/index.css";

export const App = () => {
  return (
    <div className="container">
      <Tabs
        centered
        destroyInactiveTabPane
        defaultActiveKey="1"
        items={[
          {
            key: "1",
            label: "Search",
            children: <Search />,
          },
          {
            key: "2",
            label: "Rated",
            children: <Rated />,
          },
        ]}
      />
    </div>
  );
};
