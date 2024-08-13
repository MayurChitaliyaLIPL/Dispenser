import SplitPane, {
    Divider,
    SplitPaneBottom,
    SplitPaneLeft,
    SplitPaneRight,
    SplitPaneTop,
  } from "../splitscreen/splitpane";
  import QuoteContext from "../splitscreen/quotecontext";
  import { useState } from "react";
  import "./App.css";
  import { Split } from "lucide-react";

  const quotes = [
    {
      id: 1,
      author: "Mayur Chitaliya",
      description:
        "hello page 1",
    },
    {
      id: 2,
      author: "Abhishek Dey",
      description: "hello page 2",
    },
    {
      id: 3,
      author: "Dev Prajapati",
      description:
        "hello page 3.",
    },
  ];

  function Splitt() {
    const [currQuote, setCurrQuote] = useState(1);
  
    return (
      <div className="App">
        <QuoteContext.Provider value={{ quotes, currQuote, setCurrQuote }}>
          <SplitPane className="split-pane-row">
            <SplitPaneLeft>
              <SplitPane className="split-pane-col">
                <SplitPaneTop />
                <Divider className="separator-row" />
                <SplitPaneBottom />
              </SplitPane>
            </SplitPaneLeft>
            <Divider className="separator-col" />
  
            <SplitPaneRight />
          </SplitPane>
        </QuoteContext.Provider>
      </div>
    );
  }
  
  export default Splitt;