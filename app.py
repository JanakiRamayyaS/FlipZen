import os
import streamlit as st
import streamlit.components.v1 as components

st.set_page_config(
    page_title="FlipZen — Time, Beautifully Displayed",
    page_icon="⏱️",
    layout="wide",
    initial_sidebar_state="collapsed",
)

# Custom CSS to hide default Streamlit padding, header, footer, and status bar
st.markdown(
    """
    <style>
        #MainMenu {visibility: hidden;}
        footer {visibility: hidden;}
        header {visibility: hidden;}
        div[data-testid="stToolbar"] {visibility: hidden;}
        div[data-testid="stDecoration"] {visibility: hidden;}
        div[data-testid="stStatusWidget"] {visibility: hidden;}
        .block-container {
            padding: 0rem !important;
            margin: 0rem !important;
            max-width: 100% !important;
        }
        iframe {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw !important;
            height: 100vh !important;
            border: none !important;
            z-index: 999999;
        }
    </style>
    """,
    unsafe_allow_html=True,
)

# Path to the compiled single-file index.html
INDEX_PATH = os.path.join(os.path.dirname(__file__), "dist", "index.html")

if os.path.exists(INDEX_PATH):
    with open(INDEX_PATH, "r", encoding="utf-8") as f:
        html_content = f.read()
    components.html(html_content, height=1080, scrolling=False)
else:
    st.error("Build file `dist/index.html` not found. Please run `npm run build` first.")
