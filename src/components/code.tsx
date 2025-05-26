"use client"

import { useState } from "react"
import { ChevronRight, ChevronDown, File, Folder, Menu, FileText, FolderOpen } from "lucide-react"

interface FileItem {
  name: string
  type: "file" | "folder"
  level: number
  children?: FileItem[]
  active?: boolean
  extension?: string
}

type ActiveTab = "PRO" | "Design" | "Code"

export default function Code() {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(["src", "components"]))
  const [activeFile, setActiveFile] = useState("AdsDialog.jsx")
  const [activeTab, setActiveTab] = useState<ActiveTab>("Code")

  const toggleFolder = (folderPath: string) => {
    const newExpanded = new Set(expandedFolders)
    if (newExpanded.has(folderPath)) {
      newExpanded.delete(folderPath)
    } else {
      newExpanded.add(folderPath)
    }
    setExpandedFolders(newExpanded)
  }

  const handleFileClick = (fileName: string) => {
    if (fileName.includes(".")) {
      setActiveFile(fileName)
    }
  }

  const handleTabClick = (tab: ActiveTab) => {
    setActiveTab(tab)
  }

  const getGradientClass = () => {
    switch (activeTab) {
      case "PRO":
        return "bg-gradient-to-br from-emerald-950 via-zinc-950 to-emerald-950"
      case "Design":
        return "bg-gradient-to-br from-zinc-950 via-emerald-950 to-zinc-950"
      case "Code":
        return "bg-gradient-to-br from-zinc-950 via-zinc-900 to-emerald-950"
      default:
        return "bg-zinc-950"
    }
  }

  const getSidebarGradient = () => {
    switch (activeTab) {
      case "PRO":
        return "bg-gradient-to-b from-emerald-950/80 to-zinc-950/80"
      case "Design":
        return "bg-gradient-to-b from-zinc-950/80 to-emerald-950/80"
      case "Code":
        return "bg-gradient-to-b from-zinc-900/80 to-emerald-950/80"
      default:
        return "bg-zinc-900"
    }
  }

  const getTopBarGradient = () => {
    switch (activeTab) {
      case "PRO":
        return "bg-gradient-to-r from-emerald-950/90 to-zinc-950/90"
      case "Design":
        return "bg-gradient-to-r from-zinc-950/90 to-emerald-950/90"
      case "Code":
        return "bg-gradient-to-r from-zinc-900/90 to-emerald-950/90"
      default:
        return "bg-zinc-900"
    }
  }

  const fileStructure: FileItem[] = [
    {
      name: "husky",
      type: "folder",
      level: 0,
      children: [{ name: "_", type: "folder", level: 1, children: [{ name: "pre-commit", type: "file", level: 2 }] }],
    },
    {
      name: "ct-tb",
      type: "folder",
      level: 0,
      children: [{ name: "config.json", type: "file", level: 1, extension: "json" }],
    },
    {
      name: "pnpm-store",
      type: "folder",
      level: 0,
      children: [{ name: "v3", type: "folder", level: 1, children: [] }],
    },
    { name: "README.md", type: "file", level: 0, extension: "md" },
    {
      name: "src",
      type: "folder",
      level: 0,
      children: [
        {
          name: "components",
          type: "folder",
          level: 1,
          children: [
            { name: "AdsDialog.jsx", type: "file", level: 2, extension: "jsx", active: true },
            { name: "OnDemandAd.tsx", type: "file", level: 2, extension: "tsx" },
            {
              name: "ui",
              type: "folder",
              level: 2,
              children: [
                { name: "button.tsx", type: "file", level: 3, extension: "tsx" },
                { name: "dialog.tsx", type: "file", level: 3, extension: "tsx" },
                { name: "carousel.tsx", type: "file", level: 3, extension: "tsx" },
              ],
            },
          ],
        },
        {
          name: "app",
          type: "folder",
          level: 1,
          children: [
            { name: "page.tsx", type: "file", level: 2, extension: "tsx" },
            { name: "layout.tsx", type: "file", level: 2, extension: "tsx" },
          ],
        },
        {
          name: "lib",
          type: "folder",
          level: 1,
          children: [{ name: "utils.ts", type: "file", level: 2, extension: "ts" }],
        },
      ],
    },
  ]

  const renderFileTree = (items: FileItem[], parentPath = "") => {
    return items.map((item, index) => {
      const currentPath = parentPath ? `${parentPath}/${item.name}` : item.name
      const isExpanded = expandedFolders.has(currentPath)
      const isActive = activeFile === item.name

      return (
        <div key={`${currentPath}-${index}`}>
          <div
            className={`flex items-center gap-1 py-1 px-2 text-sm cursor-pointer hover:bg-emerald-950/30 rounded transition-all duration-300 ${
              isActive ? "bg-emerald-950/50 text-emerald-300 shadow-lg" : "text-zinc-300"
            }`}
            style={{ paddingLeft: `${8 + item.level * 16}px` }}
            onClick={() => {
              if (item.type === "folder") {
                toggleFolder(currentPath)
              } else {
                handleFileClick(item.name)
              }
            }}
          >
            {item.type === "folder" ? (
              <>
                {isExpanded ? (
                  <ChevronDown className="w-3 h-3 text-zinc-400" />
                ) : (
                  <ChevronRight className="w-3 h-3 text-zinc-400" />
                )}
                {isExpanded ? (
                  <FolderOpen className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Folder className="w-4 h-4 text-emerald-400" />
                )}
              </>
            ) : (
              <>
                <div className="w-3 h-3" />
                {item.extension === "jsx" || item.extension === "tsx" ? (
                  <FileText className="w-4 h-4 text-blue-400" />
                ) : item.extension === "json" ? (
                  <FileText className="w-4 h-4 text-yellow-400" />
                ) : item.extension === "md" ? (
                  <FileText className="w-4 h-4 text-blue-300" />
                ) : (
                  <File className="w-4 h-4 text-zinc-400" />
                )}
              </>
            )}
            <span className={isActive ? "text-emerald-300" : ""}>{item.name}</span>
          </div>
          {item.type === "folder" && isExpanded && item.children && (
            <div>{renderFileTree(item.children, currentPath)}</div>
          )}
        </div>
      )
    })
  }

  const getFileContent = (fileName: string) => {
    switch (fileName) {
      case "AdsDialog.jsx":
        return (
          <div className="space-y-1">
            <div className="text-purple-400">use client</div>
            <div className="h-4"></div>
            <div>
              <span className="text-blue-400">import</span>
              <span className="text-white"> {"{ "}</span>
              <span className="text-blue-300">useState</span>
              <span className="text-white"> {"} "}</span>
              <span className="text-blue-400">from</span>
              <span className="text-green-400"> &apos;react&apos;</span>
            </div>
            <div>
              <span className="text-blue-400">import</span>
              <span className="text-white"> {"{ "}</span>
              <span className="text-blue-300">Button</span>
              <span className="text-white"> {"} "}</span>
              <span className="text-blue-400">from</span>
              <span className="text-green-400"> &apos;@components/ui/button&apos;</span>
            </div>
            <div>
              <span className="text-blue-400">import</span>
              <span className="text-white"> {"{ "}</span>
              <span className="text-blue-300">Dialog</span>
              <span className="text-white">, </span>
              <span className="text-blue-300">DialogTrigger</span>
              <span className="text-white">, </span>
              <span className="text-blue-300">DialogContent</span>
              <span className="text-white"> {"} "}</span>
              <span className="text-blue-400">from</span>
            </div>
            <div>
              <span className="text-green-400">&apos;@components/ui/dialog&apos;</span>
            </div>
            <div>
              <span className="text-blue-300">Carousel</span>
              <span className="text-white">,</span>
            </div>
            <div>
              <span className="text-blue-300">CarouselContent</span>
              <span className="text-white">,</span>
            </div>
            <div>
              <span className="text-blue-300">CarouselItem</span>
              <span className="text-white">,</span>
            </div>
            <div>
              <span className="text-blue-300">CarouselNext</span>
            </div>
            <div>
              <span className="text-blue-400">import</span>
              <span className="text-white"> </span>
              <span className="text-blue-300">Link</span>
              <span className="text-white"> </span>
              <span className="text-blue-400">from</span>
            </div>
            <div className="h-4"></div>
            <div>
              <span className="text-blue-400">const</span>
              <span className="text-white"> productImages = [</span>
            </div>
            <div>
              <span className="text-green-400"> &apos;/images/only*.jpg&apos;</span>
              <span className="text-white">]</span>
            </div>
          </div>
        )
      case "OnDemandAd.tsx":
        return (
          <div className="space-y-1">
            <div>
              <span className="text-blue-400">import</span>
              <span className="text-white"> </span>
              <span className="text-blue-300">React</span>
              <span className="text-white"> </span>
              <span className="text-blue-400">from</span>
              <span className="text-green-400"> &apos;react&apos;</span>
            </div>
            <div className="h-4"></div>
            <div>
              <span className="text-blue-400">export default function</span>
              <span className="text-yellow-300"> OnDemandAd</span>
              <span className="text-white">() {"{"}</span>
            </div>
            <div>
              <span className="text-white"> </span>
              <span className="text-blue-400">return</span>
              <span className="text-white"> (</span>
            </div>
            <div>
              <span className="text-white"> </span>
              <span className="text-red-400">{"<div>"}</span>
              <span className="text-white">On Demand Ad Component</span>
              <span className="text-red-400">{"</div>"}</span>
            </div>
            <div>
              <span className="text-white"> )</span>
            </div>
            <div>
              <span className="text-white">{"}"}</span>
            </div>
          </div>
        )
      case "README.md":
        return (
          <div className="space-y-1">
            <div className="text-blue-300"># Project Name</div>
            <div className="h-4"></div>
            <div className="text-white">This is a Next.js project with TypeScript and Tailwind CSS.</div>
            <div className="h-4"></div>
            <div className="text-blue-300">## Getting Started</div>
            <div className="h-4"></div>
            <div className="text-white">Run the development server:</div>
            <div className="h-4"></div>
            <div className="bg-zinc-800/50 p-2 rounded">
              <span className="text-green-400">npm run dev</span>
            </div>
          </div>
        )
      default:
        return (
          <div className="space-y-1">
            <div className="text-zinc-400">{"//"} {fileName}</div>
            <div className="text-white">File content would appear here...</div>
          </div>
        )
    }
  }

  const getTabContent = () => {
    switch (activeTab) {
      case "PRO":
        return (
          <div className="space-y-4">
            <div className="text-emerald-300 text-xl font-bold">PRO Features</div>
            <div className="text-zinc-300">Advanced development tools and premium features</div>
            <div className="space-y-2">
              <div className="text-emerald-400">• Advanced debugging tools</div>
              <div className="text-emerald-400">• Premium extensions</div>
              <div className="text-emerald-400">• Cloud sync</div>
              <div className="text-emerald-400">• Priority support</div>
            </div>
          </div>
        )
      case "Design":
        return (
          <div className="space-y-4">
            <div className="text-emerald-300 text-xl font-bold">Design Mode</div>
            <div className="text-zinc-300">Visual design tools and UI components</div>
            <div className="space-y-2">
              <div className="text-emerald-400">• Component library</div>
              <div className="text-emerald-400">• Visual editor</div>
              <div className="text-emerald-400">• Design tokens</div>
              <div className="text-emerald-400">• Figma integration</div>
            </div>
          </div>
        )
      case "Code":
        return getFileContent(activeFile)
      default:
        return getFileContent(activeFile)
    }
  }

  return (
    <div className={`h-screen  text-white flex flex-col transition-all   duration-500 ${getGradientClass()}`}>
      {/* Top Navigation */}
      <div
        className={`h-12 flex items-center justify-between px-4 border-b border-emerald-950/50 backdrop-blur-sm transition-all duration-500 ${getTopBarGradient()}`}
      >
        <div className="flex items-center gap-4">
          <Menu className="w-5 h-5 text-zinc-400" />
          <span className="text-sm font-medium hidden sm:flex text-emerald-300">AI Branch Name</span>
        </div>
        <div className="flex items-center gap-6">
          {(["PRO", "Design", "Code"] as ActiveTab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`text-sm font-medium px-3 py-1 rounded transition-all duration-300 ${
                activeTab === tab
                  ? "text-emerald-300 bg-emerald-950/50 shadow-lg border border-emerald-800/50"
                  : "text-zinc-400 hover:text-emerald-400 hover:bg-emerald-950/20"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-1">
        {/* Sidebar - Only show for Code tab */}
        {activeTab === "Code" && (
          <div
            className={`w-64 border-r border-emerald-950/50 backdrop-blur-sm transition-all duration-500 ${getSidebarGradient()}`}
          >
            {/* File Explorer Header */}
            <div className="p-3 border-b border-emerald-950/50">
              <div className="flex items-center gap-2">
                <File className="w-4 h-4 text-zinc-400" />
                <Folder className="w-4 h-4 text-emerald-400" />
              </div>
            </div>

            {/* File Tree */}
            <div className="p-2 overflow-auto">{renderFileTree(fileStructure)}</div>
          </div>
        )}

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Tab Bar - Only show for Code tab */}
          {activeTab === "Code" && (
            <div
              className={`h-9 border-b border-emerald-950/50 flex items-center px-4 backdrop-blur-sm transition-all duration-500 ${getSidebarGradient()}`}
            >
              <div className="bg-emerald-950/30 px-3 py-1 text-sm border-t-2 border-emerald-500 text-emerald-300 rounded-t">
                {activeFile}
              </div>
            </div>
          )}

          {/* Content Area */}
          <div className="flex-1 p-4 font-mono text-sm overflow-auto backdrop-blur-sm">{getTabContent()}</div>
        </div>
      </div>
    </div>
  )
}
