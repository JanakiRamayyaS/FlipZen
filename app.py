import os
import streamlit as st
import streamlit.components.v1 as components

st.set_page_config(
    page_title="FlipZen — Time, Beautifully Displayed",
    page_icon="⏱️",
    layout="wide",
    initial_sidebar_state="collapsed",
)

# Custom CSS to hide default Streamlit chrome & enforce full viewport width/height
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
            min-height: 95vh !important;
            border: none !important;
        }
    </style>
    """,
    unsafe_allow_html=True,
)

BUILD_DIR = os.path.join(os.path.dirname(__file__), "dist")

if os.path.exists(BUILD_DIR):
    flipzen_component = components.declare_component("flipzen", path=BUILD_DIR)
    flipzen_component(key="flipzen_app", height=950)
else:
    st.error("Build directory `dist/` not found. Please run `npm run build` first.")
