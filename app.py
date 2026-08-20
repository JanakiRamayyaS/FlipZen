import os
import streamlit as st
import streamlit.components.v1 as components

st.set_page_config(
    page_title="FlipZen — Time, Beautifully Displayed",
    page_icon="⏱️",
    layout="wide",
    initial_sidebar_state="collapsed",
)

# Custom CSS to hide default Streamlit headers, footers and margins
st.markdown(
    """
    <style>
        #MainMenu {visibility: hidden;}
        footer {visibility: hidden;}
        header {visibility: hidden;}
        [data-testid="stToolbar"] {display: none !important;}
        [data-testid="stHeader"] {display: none !important;}
        .main .block-container {
            padding: 0 !important;
            margin: 0 !important;
            max-width: 100% !important;
        }
        iframe {
            width: 100% !important;
            height: 100vh !important;
            border: none !important;
        }
    </style>
    """,
    unsafe_allow_html=True,
)

INDEX_PATH = os.path.join(os.path.dirname(__file__), "dist", "index.html")

if os.path.exists(INDEX_PATH):
    with open(INDEX_PATH, "r", encoding="utf-8") as f:
        html_content = f.read()
    components.html(html_content, height=950, scrolling=True)
else:
    st.error("Build file `dist/index.html` not found. Please run `npm run build` first.")
