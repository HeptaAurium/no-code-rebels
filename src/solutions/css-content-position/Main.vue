<template>
  <Nav page="css-content" breadcrumb="true" />
  <div
    class="solution bg-gray-800 w-10/12 mx-auto min-h-screen py-12 rounded-lg text-white px-6 mb-3"
  >
    <div class="my-3 py-3" id="question">
      QUESTION:
      <div class="flex flex-wrap">
        <div class="italic p-4">
          <p>
            Your task is to implement a CSS file to properly place elements,
            using flexbox, inside the HTML file generated by the backend. The
            HTML file already defines some CSS rules which cannot be changed.
            For simplicity, these predefined rules are described inside the
            &lt;style&gt; tag.
          </p>
          <p>
            Use flexbox to align the &lt;div&gt; containers of the presented
            HTML file. The details as to how each container should present
            itself are described in the content of each element as well as in
            the Requirements section.
          </p>
        </div>
      </div>
    </div>
    <div class="my-3 py-3" id="solution">
      SOLUTION:
      <div class="flex flex-wrap">
        <div class="italic p-4">
          <pre>
            &lt;style&gt;
                    body {
                        background: #3f4040;
                        width: 100%;
                        margin: 0;
                    }

                    .container {
                        overflow: auto;
                    }

                    .outer-centered {
                        margin: 5%;
                        height: 250px;
                        box-sizing: border-box;
                        background: #fff;
                        text-align: left;
                    }

                    .outer-left {
                        width: 45%;
                        height: 250px;
                        box-sizing: border-box;
                        background: purple;
                        text-align: left;
                    }

                    .outer-right {
                        width: 35%;
                        height: 250px;
                        box-sizing: border-box;
                        background: green;
                        text-align: left;
                    }

                    .inner {
                        width: 300px;
                        height: 150px;
                    }
                    .outer-centered .inner {
                        border: 2px solid red;
                    }
                    .outer-left .inner {
                        border: 2px solid white;
                    }
                    .outer-right .inner {
                        border: 2px solid yellow;
                    }

                    /* added code */

                    .container {
                        display: flex;
                    }

                    .container:first-child {
                        justify-content: center;
                        align-items: center;
                        width: 100%;
                    }

                    .outer-centered {
                        width: 40%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .outer-centered .inner {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color: #111;
                        text-align: center;
                        padding: 10px;
                        font-size: 13px;
                    }

                    .container:nth-child(2) {
                        justify-content: space-between;
                    }

                    .outer-left {
                        display: flex;
                        justify-content: flex-start;
                        align-items: flex-end;
                    }
                    .outer-right {
                        display: flex;
                        justify-content: flex-end;
                        align-items: flex-end;
                    }
            &lt;/style&gt;
          </pre>
        </div>
      </div>
    </div>
    <div class="my-3 py-3" id="result">
      RESULT:
      <div class="p-0 m-0 bg-gray-600 rounded mt-3">
        <CssHtml />
      </div>
    </div>
  </div>
</template>

<script setup>
import Nav from "@/components/header/Main.vue";
import CssHtml from "./html.vue";
</script>

<style lang="scss" scoped></style>
