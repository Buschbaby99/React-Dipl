import React, { useState } from "react";
export default function ProjectNotes(props) {
    const [filter, setFilter] = useState("");
    function formatTextWithLineBreaks(text) {
        return text.split("\n").map((line, index) => (
            <React.Fragment key={index}>
                {line}
                <br />
            </React.Fragment>
        ));
    }

    const filteredData =
        filter.length >= 1
            ? props.props.data.filter((entry) =>
                  entry.project.toLowerCase().includes(filter.toLowerCase())
              )
            : props.props.data;

    return (
        <div>
            <div className="p-6 bg-white rounded-lg shadow-md m-6 space-y-2">
                <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Projektname filtern..."
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                />
            </div>
            {filteredData.map((entry, index) => (
                <div
                    key={index}
                    className="p-6 bg-white rounded-lg shadow-md m-6 space-y-2"
                >
                    <div className="flex justify-between items-center">
                        <h3 className="text-lg font-extrabold font-semibold">
                            {entry.project}
                        </h3>
                        <div className="flex items-center">
                            <h3 className="text-sm font-semibold text-gray-600 mr-4">
                                {entry.created_at}
                            </h3>
                            <div className="flex items-center mx-4">
                                <div className="w-24 h-2 bg-red-300 mr-2 rounded">
                                    <div
                                        className={`h-2 rounded ${
                                            entry.status >= 50
                                                ? "bg-green-500"
                                                : "bg-red-500"
                                        }`}
                                        style={{ width: `${entry.status}%` }}
                                    ></div>
                                </div>
                                <span className="text-sm font-semibold">
                                    {entry.status}%
                                </span>
                            </div>
                        </div>
                    </div>
                    <h3 className="text-lg font-semibold">
                        {" "}
                        {entry.firstname} {entry.lastname}
                    </h3>
                    <h3 className="text-base font-semibold">
                        {entry.department}
                    </h3>
                    <div className="p-4 bg-gray-100 rounded-lg">
                        <p className="mt-2 text-sm">
                            {formatTextWithLineBreaks(entry.note)}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
