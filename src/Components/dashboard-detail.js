"use client";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { GoogleGenerativeAI } from "@google/generative-ai";

import axios from "axios";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";

import Table from "./newTable";
import Select from "./Select";
import "../style/DashboardDetail.css";
SyntaxHighlighter.registerLanguage("javascript", js);

const genAI = new GoogleGenerativeAI(""); // Replace with your actual API key

export const clsColorMap = (value) => {
  let color = "#4CAF50";
  if (value < 0.1) {
    color = "#0c6";
  } else if (value < 0.25) {
    color = "#FFC107";
  } else {
    color = "#F44336";
  }

  return color;
};

export const fcpColorMap = (value) => {
  let color = "#4CAF50";
  if (value < 1) {
    color = "#0c6";
  } else if (value < 2) {
    color = "#FFC107";
  } else {
    color = "#F44336";
  }

  return color;
};

export const lcpColorMap = (value) => {
  let color = "#4CAF50";
  if (value < 3) {
    color = "#0c6";
  } else if (value < 6) {
    color = "#FFC107";
  } else {
    color = "#F44336";
  }

  return color;
};

export default function DashboardDetail({ id }) {
  const [aiCode, setAiCode] = useState("");
  const [currentCWV, setCurrentCWV] = useState("lcp");
  const [data, setData] = useState();
  const [modelData, setModel] = useState("");
  const [modelData1, setModel1] = useState("");
  const [modelData2, setModel2] = useState("");
  const [modelData3, setModel3] = useState("");

  useEffect(() => {
    const fetchDataById = async () => {
      const url = `http://localhost:3000/peformance/${id}`;
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchDataById();
  }, []);

  const getAnswer = async (prompt) => {
    try {
      const model = await genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
      });
      console.log("this is model", model);
      const response = await model.generateContent(prompt);
      console.log(
        "this is response",
        response.response.candidates[0].content.parts[0].text
      );
      setModel(response.response.candidates[0].content.parts[0].text);
    } catch (error) {
      console.error("Error fetching data from Gemini API:", error);
      // Handle errors gracefully, e.g., display an error message to the user
    }
  };

  const getAnswer1 = async (prompt) => {
    try {
      const model = await genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
      });
      console.log("this is model", model);
      const response = await model.generateContent(prompt);
      console.log(
        "this is response",
        response.response.candidates[0].content.parts[0].text
      );
      setModel1(response.response.candidates[0].content.parts[0].text);
    } catch (error) {
      console.error("Error fetching data from Gemini API:", error);
      // Handle errors gracefully, e.g., display an error message to the user
    }
  };

  const getAnswer2 = async (prompt) => {
    try {
      const model = await genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
      });
      console.log("this is model", model);
      const response = await model.generateContent(prompt);
      console.log(
        "this is response",
        response.response.candidates[0].content.parts[0].text
      );
      setModel2(response.response.candidates[0].content.parts[0].text);
    } catch (error) {
      console.error("Error fetching data from Gemini API:", error);
      // Handle errors gracefully, e.g., display an error message to the user
    }
  };

  const getAnswer3 = async (prompt) => {
    try {
      const model = await genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
      });
      console.log("this is model", model);
      const response = await model.generateContent(prompt);
      console.log(
        "this is response",
        response.response.candidates[0].content.parts[0].text
      );
      setModel3(response.response.candidates[0].content.parts[0].text);
    } catch (error) {
      console.error("Error fetching data from Gemini API:", error);
      // Handle errors gracefully, e.g., display an error message to the user
    }
  };

  useEffect(() => {
    if (data?.unused_javascript.title) {
      getAnswer(
        `Give me a short description .How to fix,${data?.unused_javascript.title}`
      );
      getAnswer1(
        `Give me a short description .How to fix,${data?.duplicated_javascript.title}`
      );
      getAnswer2(
        `Give me a short description .How to fix,${data?.legacy_javascript.title}`
      );
      getAnswer3(
        `Give me a short description .How to fix,${data?.unsized_images.title}`
      );
    }
  }, [data?.unused_javascript.title]);

  useEffect(() => {
    const postData = async () => {
      const url = "http://localhost:3000/peformance/generate-code";
      const payload = {
        old_code: data.pr_changes.old_code,
        new_code: data.pr_changes.new_code,
      };

      try {
        const response = await axios.post(url, payload);
        setAiCode(response.data?.response);
        console.log("Data posted successfully:", response.data);
      } catch (error) {
        console.error("Error posting data:", error);
      }
    };
    if (data?.pr_changes.old_code && data?.pr_changes.new_code) {
      setTimeout(() => {
        console.log("I am called with data");
        postData();
      }, 1000);
    }
  }, [data?.pr_changes.old_code, data?.pr_changes.new_code]);

  const createTicket = async () => {
    const url = "http://localhost:3000/peformance/create-ticket";
    const payload = {
      old_code: data.pr_changes.old_code,
      new_code: data.pr_changes.new_code,
      key: currentCWV,
      old_score: data[currentCWV].displayValue,
      new_score: data[currentCWV].displayValue,
    };

    try {
      const response = await axios.post(url, payload);
      console.log("Data posted successfully:", response.data);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ fontWeight: 600, fontSize: "xxx-large", textAlign: "center" }}>
        {data?.pull_request?.title || "test"}
      </Box>
      <br />

      <div className="grid-data">
        <div className="table-title">
          <span>metric</span>
          <span className="value">value</span>
        </div>

        <Grid className="datas-top">
          <Box className="data first">
            <Box sx={{ fontSize: "24px" }}>{data?.cls.title}</Box>
            <Box
              sx={{
                color: clsColorMap(parseFloat(data?.cls.displayValue)),
                fontWeight: 600,
                fontSize: "x-large",
              }}
              className="num-data cls"
            >
              {data?.cls.displayValue}
            </Box>
          </Box>
        </Grid>
        <Grid className="datas-top">
          <Box className="data first">
            <Box sx={{ fontSize: "24px" }}>{data?.fcp.title}</Box>
            <Box
              sx={{
                color: fcpColorMap(parseFloat(data?.fcp.displayValue)),
                fontWeight: 600,
                fontSize: "x-large",
              }}
              className="num-data fcp"
            >
              {data?.fcp.displayValue}
            </Box>
          </Box>
        </Grid>
        <Grid className="datas-top">
          <Box className="data second">
            <Box sx={{ fontSize: "24px" }}> {data?.lcp.title}</Box>
            <Box
              sx={{
                color: lcpColorMap(parseFloat(data?.lcp.displayValue)),
                fontWeight: 600,
                fontSize: "x-large",
              }}
              className="num-data lcp"
            >
              {data?.lcp.displayValue}
            </Box>
          </Box>
        </Grid>

        <Grid className="datas-top">
          <Box className="data third">
            <Box sx={{ fontSize: "24px" }}> {data?.tbt?.title}</Box>
            <Box
              sx={{
                color: lcpColorMap(parseFloat(data?.tbt?.displayValue)),
                fontWeight: 600,
                fontSize: "x-large",
              }}
              className="num-data tbt"
            >
              <span>{data?.tbt?.displayValue}</span>
            </Box>
          </Box>
        </Grid>
        <Grid className="datas-top">
          <Box className="data fourth">
            <Box sx={{ fontSize: "24px" }}> {data?.speed_index?.title}</Box>
            <Box
              sx={{
                color: lcpColorMap(parseFloat(data?.speed_index?.displayValue)),
                fontWeight: 600,
                fontSize: "x-large",
              }}
              className="num-data speed_index"
            >
              {data?.speed_index?.displayValue}
            </Box>
          </Box>
        </Grid>
      </div>
      <br />
      <br />
      <Box>
        <Box className="Opportunities">Opportunities</Box>
        <Box>
          <Box className="opp-data-details">
            <Box sx={{ fontSize: "24px", display: "flex" }}>
              <Box>
                <ReportProblemIcon color="error" />{" "}
              </Box>
              &nbsp;
              <Box className="title-opp">
                {data?.unused_javascript.title} (
                {data?.unused_javascript.displayValue})
              </Box>
            </Box>
            <Box sx={{ paddingLeft: "30px", paddingTop: "20px" }}>
              {data?.unused_javascript.description}
              <br />

              <Box sx={{ marginTop: "4px" }}>
                <Box sx={{ paddingLeft: "30px" }}>
                  <Table details={data?.unused_javascript?.details} />
                </Box>
                {modelData ? (
                  <Box sx={{ fontSize: "18px", fontWeight: 500 }}>
                    AI Generated Possible Solution
                  </Box>
                ) : null}
                <Box sx={{ fontWeight: 400, fontSize: "large" }}>
                  {modelData}
                </Box>
              </Box>
            </Box>
          </Box>
          <br />
          <Box className="opp-data-details">
            <Box sx={{ fontSize: "24px", display: "flex" }}>
              <Box>
                <ReportProblemIcon color="error" />{" "}
              </Box>
              &nbsp;
              <Box className="title-opp">
                <Box className="title-opp">
                  {data?.duplicated_javascript.title}
                </Box>
                <Box
                  sx={{
                    paddingTop: "20px",
                    fontWeight: 400,
                    fontSize: "large",
                  }}
                >
                  {data?.duplicated_javascript.description}
                </Box>
                <Box sx={{ marginTop: "4px" }}>
                  {modelData1 ? (
                    <Box sx={{ fontSize: "18px", fontWeight: 500 }}>
                      AI Generated Possible Solution
                    </Box>
                  ) : null}
                  <Box sx={{ fontWeight: 400, fontSize: "large" }}>
                    {modelData1}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <br />
          <Box className="opp-data-details">
            <Box sx={{ fontSize: "24px", display: "flex" }}>
              <Box>
                <ReportProblemIcon color="error" />{" "}
              </Box>
              &nbsp;
              <Box className="title-opp">
              <Box className="title-opp">

                {data?.legacy_javascript.title}
                  </Box>
                <Box sx={{ marginTop: "4px" }}>
                  <Box
                    sx={{
                      paddingTop: "20px",
                      fontWeight: 400,
                      fontSize: "large",
                    }}
                  >
                    {data?.legacy_javascript.description}
                  </Box>
                  <br />
                  {modelData2 ? (
                    <Box sx={{ fontSize: "18px", fontWeight: 500 }}>
                      AI Generated Possible Solution
                    </Box>
                  ) : null}
                  <Box sx={{ fontWeight: 400, fontSize: "large" }}>
                    {modelData2}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <br />
          <Box className="opp-data-details">
            <Box sx={{ fontSize: "24px", display: "flex" }}>
              <Box>
                <ReportProblemIcon color="error" />{" "}
              </Box>
              &nbsp;
              <Box className="title-opp">
              <Box className="title-opp">

                {data?.unsized_images.title}
                </Box>
                <Box
                  sx={{
                    paddingTop: "20px",
                    fontWeight: 400,
                    fontSize: "large",
                  }}
                >
                  {data?.unsized_images.description}
                </Box>
                <Box sx={{ marginTop: "4px" }}>
                  {modelData3 ? (
                    <Box sx={{ fontSize: "18px", fontWeight: 500 }}>
                      AI Generated Possible Solution
                    </Box>
                  ) : null}
                  <Box sx={{ fontWeight: 400, fontSize: "large" }}>
                    {modelData3}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <br />
      <Box>
        <Box sx={{ fontWeight: "600", fontSize: "28px" }}>Old Code</Box>
        <SyntaxHighlighter
          language="javascript"
          style={dark}
          customStyle={{ maxHeight: "500px" }}
          startingLineNumber={true}
        >
          {data?.pr_changes.old_code}
        </SyntaxHighlighter>

        <Box sx={{ fontWeight: "600", fontSize: "28px" }}>New Code</Box>
        <SyntaxHighlighter
          language="javascript"
          style={dark}
          customStyle={{ maxHeight: "500px" }}
          showInlineLineNumbers
        >
          {data?.pr_changes.new_code}
        </SyntaxHighlighter>

        <Box sx={{ fontWeight: "600", fontSize: "28px" }}>Changes</Box>
        <SyntaxHighlighter
          language="javascript"
          style={dark}
          customStyle={{ maxHeight: "500px" }}
          showInlineLineNumbers
        >
          {data?.pr_changes.changed_part}
        </SyntaxHighlighter>

        <Box sx={{ fontWeight: "600", fontSize: "28px" }}>
          AI Generated Possible Solution
        </Box>
        <SyntaxHighlighter
          language="javascript"
          style={dark}
          customStyle={{ maxHeight: "500px" }}
          showInlineLineNumbers
        >
          {aiCode}
        </SyntaxHighlighter>
      </Box>
      <br />

      <Box sx={{ display: "flex" }}>
        <Select currentCWV={currentCWV} setCurrentCWV={setCurrentCWV} />
        <Button variant="contained" onClick={createTicket}>
          Create Ticket
        </Button>
      </Box>
      <br />
    </Box>
  );
}

//Api for creating ticket
//Api for send old pr and new pr write me a code how I can improve core vitals.
