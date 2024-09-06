import { FeedBackForm, FeedBackFormProps } from "./components/FeedBackForm";
import ReactDOM from "react-dom/client";

export const normalizeAttribute = (attributes: string) => {
  return attributes.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
};

export default class FeedBackWebComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const props = this.getPropsFromAttributes();
    const root = ReactDOM.createRoot(this.shadowRoot as ShadowRoot);
    root.render(<FeedBackForm {...props} />);
  }
  private getPropsFromAttributes() {
    const props: { [key: string]: string } = {};
    for (const { name, value } of this.attributes) {
      props[normalizeAttribute(name)] = value;
    }

    return props as unknown as FeedBackFormProps;
  }
}
