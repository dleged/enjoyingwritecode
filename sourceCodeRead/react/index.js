(function () {
  const { useState } = React;
  const createElement = React.createElement;

  class Content extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 1,
        val: 0,
        index: 0,
      };
    }

    componentDidMount() {
      this.setState({ val: this.state.val + 1 });
      console.log(this.state.val); // 第 1 次 log 0

      this.setState({ val: this.state.val + 1 });
      console.log(this.state.val); // 第 2 次 log 0

      setTimeout(() => {
        this.setState({ val: this.state.val + 1 });
        console.log(this.state.val); // 第 3 次 log 2

        this.setState({ val: this.state.val + 1 });
        console.log(this.state.val); // 第 4 次 log 3
      }, 0);
    }

    static defaultProps = {
      adress: "浙江 杭州 余杭区 ",
      info: "📈",
      key: "000",
      name: "div",
      id: "content",
      __self: "Content",
      __source: "Source",
    };

    addClickHandle = () => {
      this.setState({ count: ++this.state.count });
    };

    render() {
      return createElement(
        "div",
        { style: { border: "1px solid red" }, onClick: this.add },
        this.state.val,
        createElement(Input, { count: this.state.val }),
        createElement(Button, { text: "➕" }),
        createElement(Button, { text: "➖" })
      );
    }
  }

  function createMath(operator) {
    return function (val, other) {
      return operator(val, other);
    };
  }

  let addFn = createMath(function (a, b) {
    return Number(a) + Number(b);
  });

  let minusFn = createMath(function (a, b) {
    return Number(a) - Number(b);
  });

  function Button(props) {
    const [count, setCount] = useState(1);
    const [count1, setCount1] = useState(2);
    const [count2, setCount3] = useState(3);
    function handle() {
      if (props.text === "➕") {
        setCount(addFn(count, 1));
      } else {
        setCount(minusFn(count, 1));
      }
    }

    return createElement(
      "button",
      {
        count: count,
        onClick: handle,
      },
      count
    );
  }

  function Input(props) {
    return createElement("input", {
      defaultProps: 1,
      value: props.count,
    });
  }


  window.onload = function () {
    let root = document.getElementById("root");
    ReactDOM.render(
      createElement(
        Content,
        {
          name: "div",
          id: "content",
        },
        "😄"
      ),
      root
    );
  };
})();
