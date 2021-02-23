import * as React from "react";
export function Button(props) {
    return (React.createElement("button", { style: {
            backgroundColor: "rebeccapurple",
            color: "white",
            borderRadius: "4px",
            border: "none",
            padding: "8px 12px",
            fontSize: "16px",
            textTransform: "uppercase",
            letterSpacing: "2px",
            margin: "10px 0",
        } }, props.children));
}
