<template>
  <div id="app" class="resume">
    <v-app>
      <!-- <v-container fluid> -->
      <v-layout row wrap>
        <v-flex xs12 md4 sm4>
          <v-container class="left-bar">
            <div class="re-content">
              <div class="re-avatar">
                <v-avatar size="160">
                  <img src="./assets/avatar2.png" alt="">
                </v-avatar>
              </div>
              <div>基础信息</div>
              <v-flex class="left-basic-fields mt-2">
                <fields></fields>
                <basic-btn></basic-btn>
              </v-flex>
              <div>技能</div>
              <v-flex class="left-basic-fields">
                <sliders></sliders>
                <slider-btn></slider-btn>
              </v-flex>
            </div>
          </v-container>
        </v-flex>
        <v-flex xs12 md8 sm8>
          <v-container>
            2222
          </v-container>
        </v-flex>
      </v-layout>
      <!-- <div class="md-avatar user-avatar">
            <img src="./assets/timg.jpg" alt="">
          </div> -->
      <!-- <div class="fields-box">
              <fields></fields>
              <div class="fileds-btn">
                <basic-btn></basic-btn>
              </div>
            </div> -->

      <!-- </v-container> -->

    </v-app>

  </div>
</template>

<script>
import Fields from './components/fields'
import BasicBtn from './components/basicBtn'
import Sliders from './components/sliders'
import SliderBtn from './components/sliderBtn'
export default {
  name: 'App',
  components: {
    Fields,
    BasicBtn,
    Sliders,
    SliderBtn
  },
  data() {
    return {
      name: '小灰灰',
      profession: '职业'
    }
  }
}
</script>

<style lang="less">
#app {
  max-width: 1200px;
  margin: 0 auto;
}
.left-bar {
  min-height: 100vh;
  background-image: linear-gradient(131deg, #abdcff 0%, #0396ff 100%);
}
.re-content {
  padding-left: 15px;
  padding-right: 15px;
  position: relative;
}
.left-basic-fields{
  .btn {
    display: none;
  }
  &:hover {
    .btn {
      display: block;
    }
  }
}
.re-avatar {
  text-align: center;
}
// .container {
//   padding: 0 20px;
// }
.fields-box {
  position: relative;
  &:hover {
    .fileds-btn {
      display: block;
    }
  }
}
.resume.md-layout {
  > .md-layout-item {
    &:first-child {
      min-height: 100vh;
      background-image: linear-gradient(345deg, #abdcff 0%, #0396ff 100%);
      // text-align: center;
    }
  }
}
.user-avatar {
  width: 8em;
  height: 8em;
  border-radius: 50%;
  margin-top: 20px;
  display: block;
}
.resume {
  .md-field {
    width: 256px;
    padding-left: 20px;
    label {
      color: #fff;
    }
    &.md-has-value {
      label {
        top: -8px;
      }
    }
    &.md-focused {
      label {
        top: -8px;
      }
    }
    &.md-theme-default:before {
      background-color: #fff;
    }
  }
  // .container {
  //   padding: 20px 20px;
  // }
}

.fileds-btn {
  position: absolute;
  right: 0;
  top: 0;
  display: none;
}
</style>
