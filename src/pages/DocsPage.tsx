
import DocsLayout from "../components/docs/DocsLayout";

export default function DocsPage() {
    return (
        <DocsLayout>
            <h1 className="text-3xl font-bold mb-4">
                Introduction
            </h1>

            <p className="text-gray-700 leading-relaxed mb-6">
                Welcome to the documentation. This section explains what the product
                does and how to use it effectively.
            </p>

            <h2 className="text-xl font-semibold mb-2">
                Why this exists
            </h2>

            <p className="text-gray-700 leading-relaxed">
                This docs page layout is built with React and Tailwind CSS and is fully
                responsive out of the box.
            </p>
        </DocsLayout>
    );
}
