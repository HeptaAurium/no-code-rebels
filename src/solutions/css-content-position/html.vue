<template>
  <div class="container">
    <div class="outer-centered">
      <div class="inner">
        `outer-centered inner` elements (shown as red square boxes) should be
        horizontally and vertically centered inside the parent `outer` (shown as
        a white box). Their content (this text) should be also horizontally and
        vertically centered inside the parent (red square box).
      </div>
    </div>
    <div class="outer-centered">
      <div class="inner">
        `outer-centered inner` elements (shown as red square boxes) should be
        horizontally and vertically centered inside the parent `outer` (shown as
        a white box). Their content (this text) should be also horizontally and
        vertically centered inside the parent (red square box).
      </div>
    </div>
  </div>
  <div class="container">
    <div class="outer-left">
      <div class="inner">
        `outer-left inner` element (shown as a white square box) should be
        positioned on the left and bottom of the parent `outer` (shown as a
        purple box). Its content (this text) should be aligned to the left side
        and the bottom of the parent `inner` (white square box).
      </div>
    </div>
    <div class="outer-right">
      <div class="inner">
        `outer-right inner` element (shown as a yellow square box) should be
        positioned on the right and bottom of the parent `outer` (show as a
        green box). Its content (this text) should be aligned to the right side
        and the bottom of the parent `inner` (yellow square box).
      </div>
    </div>
  </div>
</template>
<style scoped>
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
</style>
