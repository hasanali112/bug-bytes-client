"use client";
import React, { useState, useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const TextEditor = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        codeBlock: {
          HTMLAttributes: {
            class:
              "bg-gray-50 rounded-lg p-3 font-mono text-sm border-l-4 border-blue-500 my-2",
          },
        },
        code: {
          HTMLAttributes: {
            class:
              "bg-gray-100 px-2 py-1 rounded font-mono text-sm text-red-600",
          },
        },
      }),
    ],
    immediatelyRender: false,
    content: value,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onChange(html);
    },
    editorProps: {
      attributes: {
        class: "prose prose-lg max-w-none focus:outline-none p-6",
      },
    },
  });

  if (!isMounted) {
    return (
      <div className="flex items-center justify-center">
        <div className="text-gray-500">Loading editor...</div>
      </div>
    );
  }

  if (!editor) {
    return null;
  }

  return (
    <div className="flex flex-col bg-gray-50">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-6 py-3 bg-white border-b border-gray-200">
        <div className="flex items-center space-x-1">
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`p-2 rounded-md text-sm font-medium transition-all ${
              editor.isActive("bold")
                ? "bg-blue-100 text-blue-700"
                : "text-gray-600 hover:bg-gray-100"
            }`}
            title="Bold (Ctrl+B)"
          >
            B
          </button>

          <button
            type="button"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`p-2 rounded-md text-sm font-medium italic transition-all ${
              editor.isActive("italic")
                ? "bg-blue-100 text-blue-700"
                : "text-gray-600 hover:bg-gray-100"
            }`}
            title="Italic (Ctrl+I)"
          >
            I
          </button>

          <div className="w-px h-6 bg-gray-300 mx-2"></div>

          <button
            type="button"
            onClick={() => editor.chain().focus().toggleCode().run()}
            className={`px-2 py-2 rounded-md text-xs font-mono transition-all ${
              editor.isActive("code")
                ? "bg-blue-100 text-blue-700"
                : "text-gray-600 hover:bg-gray-100"
            }`}
            title="Inline Code"
          >
            {"</>"}
          </button>

          <button
            type="button"
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            className={`px-2 py-2 rounded-md text-xs font-mono transition-all ${
              editor.isActive("codeBlock")
                ? "bg-blue-100 text-blue-700"
                : "text-gray-600 hover:bg-gray-100"
            }`}
            title="Code Block"
          >
            {"{ }"}
          </button>

          <div className="w-px h-6 bg-gray-300 mx-2"></div>

          <button
            type="button"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className={`px-2 py-2 rounded-md text-sm font-bold transition-all ${
              editor.isActive("heading", { level: 1 })
                ? "bg-blue-100 text-blue-700"
                : "text-gray-600 hover:bg-gray-100"
            }`}
            title="Heading 1"
          >
            H1
          </button>

          <button
            type="button"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className={`px-2 py-2 rounded-md text-sm font-semibold transition-all ${
              editor.isActive("heading", { level: 2 })
                ? "bg-blue-100 text-blue-700"
                : "text-gray-600 hover:bg-gray-100"
            }`}
            title="Heading 2"
          >
            H2
          </button>

          <div className="w-px h-6 bg-gray-300 mx-2"></div>

          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`p-2 rounded-md text-sm transition-all ${
              editor.isActive("bulletList")
                ? "bg-blue-100 text-blue-700"
                : "text-gray-600 hover:bg-gray-100"
            }`}
            title="Bullet List"
          >
            •
          </button>

          <button
            type="button"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={`p-2 rounded-md text-sm transition-all ${
              editor.isActive("orderedList")
                ? "bg-blue-100 text-blue-700"
                : "text-gray-600 hover:bg-gray-100"
            }`}
            title="Numbered List"
          >
            1.
          </button>
        </div>
      </div>

      {/* Editor Content - No Border */}
      <div className="flex-1 overflow-hidden bg-white">
        <div>
          <EditorContent
            editor={editor}
            className="prose prose-lg max-w-none focus:outline-none min-h-[400px] p-6"
          />
        </div>
      </div>

      {/* Status bar */}
      <div className="px-6 py-3 bg-white text-xs text-gray-500 flex justify-between items-center border-t border-gray-200">
        <span>Press / for commands</span>
        <span>
          {editor.getText().length} characters •{" "}
          {
            editor
              .getText()
              .split(/\s+/)
              .filter((word) => word.length > 0).length
          }{" "}
          words
        </span>
      </div>
    </div>
  );
};

export default TextEditor;
