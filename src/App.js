import React, {Fragment, Component, createElement} from "react";
import Link from "./Link";


class App extends Component {
    render() {
        const link1 = React.createElement(
            Link,
            {framework: "React", url: "//react.dev"}
        );
        const link2 = React.createElement(
            Link,
            {framework: "Vue", url: "//vuejs.org"}
        );
        const link3 = React.createElement(
            Link,
            {framework: "Angular", url: "//angular.io"}
        );
        return createElement(Fragment, null, link1, link2, link3);
    }
}

export default App;