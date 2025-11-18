import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// 1. SETUP: Define __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 2. YOUR DATA STRUCTURE
const NAV_DATA = [
  { title: "Home", path: "/" },
  {
    title: "About",
    path: "/about",
    layout: "spotlight",
    columns: [
      {
        heading: "Institution",
        links: [
          { label: "Overview", desc: "Who we are", path: "/about/overview" },
          {
            label: "Vision & Mission",
            desc: "Our goals",
            path: "/about/vision",
          },
          {
            label: "Leadership",
            desc: "Board members",
            path: "/about/governance",
          },
        ],
      },
      {
        heading: "Campus Life",
        links: [
          {
            label: "Policies",
            desc: "Student handbook",
            path: "/about/policies",
          },
          {
            label: "Facilities",
            desc: "Labs & Library",
            path: "/about/facilities",
          },
        ],
      },
    ],
  },
  {
    title: "Academics",
    path: "/academics",
    layout: "grid",
    columns: [
      {
        heading: "Computer & IT",
        links: [
          { label: "Computer Engineering", path: "/academics/comp-eng" },
          { label: "Information Technology", path: "/academics/it" },
          { label: "Electronics & Telecom (ENTC)", path: "/academics/entc" },
          { label: "Engineering Sciences", path: "/academics/eng-sci" },
        ],
      },
      {
        heading: "Core Engineering",
        links: [
          { label: "Mechanical Engineering", path: "/academics/mech" },
          { label: "Civil Engineering", path: "/academics/civil" },
          { label: "Electrical Engineering", path: "/academics/electrical" },
          { label: "Central Library", path: "/academics/library" },
        ],
      },
      {
        heading: "Advanced Studies",
        links: [
          { label: "AI & Data Science", path: "/academics/aids" },
          { label: "Master of Computer Applications", path: "/academics/mca" },
          {
            label: "Electronics & Computer Eng.",
            path: "/academics/elec-comp",
          },
        ],
      },
    ],
  },
  { title: "Admissions", path: "/admissions" },
  { title: "Research", path: "/research" },
  { title: "Contact", path: "/contact" },
];

const OUTPUT_DIR = path.join(__dirname, "pages");

// 3. HELPER FUNCTIONS

// Converts a path like "/about/vision" to "AboutVision"
// Converts "/" to "Home"
function getComponentNameFromPath(urlPath) {
  if (urlPath === "/") return "Home";

  return urlPath
    .split("/")
    .filter(Boolean) // Remove empty strings
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1)) // Capitalize
    .join("");
}

// Converts "/about/vision" to "About Vision" for the H1 title
function getPageTitleFromPath(urlPath) {
  if (urlPath === "/") return "Home";

  return urlPath
    .split("/")
    .filter(Boolean)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(" ");
}

// Recursively extract all items that have a 'path'
function extractPageConfigs(data, acc = []) {
  data.forEach((item) => {
    // If the item has a direct path, add it
    if (item.path) {
      acc.push({
        path: item.path,
        componentName: getComponentNameFromPath(item.path),
        pageTitle: getPageTitleFromPath(item.path),
      });
    }

    // Check for columns (Mega menu structure)
    if (item.columns) {
      item.columns.forEach((col) => {
        if (col.links) {
          extractPageConfigs(col.links, acc);
        }
      });
    }

    // Handle standard nested children if structure varies
    if (item.children) {
      extractPageConfigs(item.children, acc);
    }
  });
  return acc;
}

// 4. MAIN EXECUTION
const generatePages = () => {
  try {
    // Create output directory
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR);
      console.log(`Created directory: ${OUTPUT_DIR}`);
    }

    const allPages = extractPageConfigs(NAV_DATA);

    console.log(`Found ${allPages.length} pages to generate...`);

    allPages.forEach((page) => {
      const fileContent = `import React from 'react';

const ${page.componentName} = () => {
  return (
    <div className="p-10 container mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">${page.pageTitle}</h1>
      <p className="text-lg text-gray-600">
        Welcome to the ${page.pageTitle} page.
      </p>
    </div>
  );
};

export default ${page.componentName};
`;

      const fileName = `${page.componentName}.jsx`;
      const filePath = path.join(OUTPUT_DIR, fileName);

      fs.writeFileSync(filePath, fileContent);
      console.log(`✅ Generated: ${fileName}`);
    });

    // Optional: Generate an index.js to export all of them for easier importing
    const indexContent = allPages
      .map(
        (page) =>
          `export { default as ${page.componentName} } from './${page.componentName}';`
      )
      .join("\n");

    fs.writeFileSync(path.join(OUTPUT_DIR, "index.js"), indexContent);
    console.log(`✅ Generated: index.js (Barrel file)`);

    console.log(`\nSuccess! All files located in: ${OUTPUT_DIR}`);
  } catch (error) {
    console.error("Error generating pages:", error);
  }
};

generatePages();
