<template>
  <div>
    {{/* Huvud */}}
    <svg
      width="334"
      height="450"
      viewBox="0 0 334 271"
      fill="none"
      v-if="letters.length >= 1 || winner.id== 0"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d)">
        <path
          d="M309.897 59.6622L277.83 24.0139C275.751 21.7031 273.163 19.9086 270.269 18.7728L229.842 2.90088C226.667 1.65436 223.226 1.24059 219.846 1.6989L168.643 8.6416C166.889 8.87948 165.111 8.88336 163.355 8.65315L110.333 1.69939C106.84 1.24127 103.287 1.71401 100.036 3.06978L62.402 18.7605C59.6551 19.9057 57.1985 21.6495 55.2112 23.8648L23.9455 58.7166C22.0052 60.8796 20.5594 63.4393 19.7088 66.2178L7.31375 106.708C6.44867 109.534 6.22064 112.517 6.64603 115.441L13.4858 162.465C13.8259 164.803 14.5777 167.063 15.7062 169.139L42.8508 219.07C44.6607 222.399 47.3792 225.146 50.6898 226.99L89.687 248.712C91.2223 249.567 92.8636 250.216 94.5686 250.642L133.611 260.403C135.198 260.799 136.827 261 138.462 261H191.783C193.256 261 194.726 260.837 196.163 260.514L240.048 250.663C242.005 250.223 243.885 249.492 245.624 248.494L282.427 227.366C286.051 225.285 288.932 222.122 290.666 218.32L318.904 156.404C319.631 154.808 320.146 153.124 320.434 151.393L328.008 105.95C328.655 102.069 328.143 98.0849 326.537 94.4942L313.284 64.8704C312.433 62.9685 311.29 61.2112 309.897 59.6622Z"
          fill="#DB6102"
        />
        <path
          d="M309.897 59.6622L277.83 24.0139C275.751 21.7031 273.163 19.9086 270.269 18.7728L229.842 2.90088C226.667 1.65436 223.226 1.24059 219.846 1.6989L168.643 8.6416C166.889 8.87948 165.111 8.88336 163.355 8.65315L110.333 1.69939C106.84 1.24127 103.287 1.71401 100.036 3.06978L62.402 18.7605C59.6551 19.9057 57.1985 21.6495 55.2112 23.8648L23.9455 58.7166C22.0052 60.8796 20.5594 63.4393 19.7088 66.2178L7.31375 106.708C6.44867 109.534 6.22064 112.517 6.64603 115.441L13.4858 162.465C13.8259 164.803 14.5777 167.063 15.7062 169.139L42.8508 219.07C44.6607 222.399 47.3792 225.146 50.6898 226.99L89.687 248.712C91.2223 249.567 92.8636 250.216 94.5686 250.642L133.611 260.403C135.198 260.799 136.827 261 138.462 261H191.783C193.256 261 194.726 260.837 196.163 260.514L240.048 250.663C242.005 250.223 243.885 249.492 245.624 248.494L282.427 227.366C286.051 225.285 288.932 222.122 290.666 218.32L318.904 156.404C319.631 154.808 320.146 153.124 320.434 151.393L328.008 105.95C328.655 102.069 328.143 98.0849 326.537 94.4942L313.284 64.8704C312.433 62.9685 311.29 61.2112 309.897 59.6622Z"
          stroke="#A94B02"
          stroke-width="3"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="0.937756"
          y="0.0175171"
          width="332.843"
          height="270.482"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
      {{/* Hatt */}}
      <svg
        width="80"
        x="130"
        y="-70"
        v-if="letters.length >= 2 || winner.id== 0"
        height="112"
        viewBox="0 0 80 112"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_i)">
          <path
            d="M51.2621 0L62.9126 13.494L51.2621 25.5382L48.1553 41.8996V55.0563L51.2621 69.8313L62.9126 79.6828L73.0097 86.0924L80 93.1768L66.1465 106.534L44.6506 112L18.9177 106.534L0 91.1526L8.15534 69.8313L16.699 47.5663L21.3592 36.5021L27.1845 23.6145L37.2816 10.1888L51.2621 0Z"
            fill="url(#paint0_linear)"
          />
        </g>
        <path
          d="M50.9028 25.1906L50.7988 25.298L50.7709 25.4449L47.6641 41.8064L47.6553 41.8526V41.8996V55.0563V55.1083L47.666 55.1592L50.7728 69.9342L50.8082 70.1022L50.9393 70.2131L62.5898 80.0646L62.6158 80.0866L62.6447 80.1049L72.6937 86.4841L79.2888 93.1679L65.8949 106.082L44.6404 111.487L19.1395 106.07L0.596351 90.9931L8.62215 70.0105L8.62234 70.0099L17.1629 47.7529L21.8175 36.7021L27.6173 23.8708L37.6363 10.5489L51.1845 0.675236L62.2355 13.4748L50.9028 25.1906Z"
          stroke="#283F16"
        />
        <defs>
          <filter
            id="filter0_i"
            x="0"
            y="0"
            width="80"
            height="116"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
          </filter>
          <linearGradient
            id="paint0_linear"
            x1="52.7693"
            y1="-63.3705"
            x2="52.7693"
            y2="44.5813"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#588238" />
            <stop offset="1" stop-color="#304A1B" />
          </linearGradient>
        </defs>
      </svg>

      {{/* Ögonbryn vänster  */}}
      <svg
        width="88"
        height="52"
        v-if="letters.length >= 3 || winner.id== 0"
        x="80"
        y="40"
        viewBox="0 0 88 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d)">
          <path
            d="M7.94601 13.9983L26.1192 5.59144L76.5812 43.2411L37.9126 29.2088L7.94601 13.9983Z"
            fill="black"
          />
          <path
            d="M7.94601 13.9983L26.1192 5.59144L76.5812 43.2411L37.9126 29.2088L7.94601 13.9983Z"
            fill="black"
          />
          <path
            d="M7.94601 13.9983L26.1192 5.59144L76.5812 43.2411L37.9126 29.2088L7.94601 13.9983Z"
            stroke="black"
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="0.80407"
            y="0.116455"
            width="86.3544"
            height="51.6488"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      {{/* Ögonbryn Höger  */}}
      <svg
        width="90"
        height="51"
        x="170"
        v-if="letters.length >= 4 || winner.id== 0"
        y="40"
        viewBox="0 0 90 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d)">
          <path
            d="M82.0327 12.9775L63.8611 5.53761L10.4826 41.4846L50.6765 27.6911L82.0327 12.9775Z"
            fill="black"
          />
          <path
            d="M82.0327 12.9775L63.8611 5.53761L10.4826 41.4846L50.6765 27.6911L82.0327 12.9775Z"
            fill="black"
          />
          <path
            d="M82.0327 12.9775L63.8611 5.53761L10.4826 41.4846L50.6765 27.6911L82.0327 12.9775Z"
            stroke="black"
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="0.697952"
            y="0.111145"
            width="88.3325"
            height="49.8928"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      {{/* vänster öga */}}
      <svg
        width="104"
        x="60"
        y="75"
        v-if="letters.length >= 5 || winner.id== 0"
        height="66"
        viewBox="0 0 104 66"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d)">
          <path
            d="M13.432 3.34663L55.5945 22.288L98.706 19.4476L83.6335 35.6983L69.9199 46.4763L54.1379 49.2255L41.486 46.8367L33.9884 39.6919L26.6063 30.6597L23.4104 24.3273L13.432 3.34663Z"
            fill="#F0C11B"
          />
          <path
            d="M13.432 3.34663L55.5945 22.288L98.706 19.4476L83.6335 35.6983L69.9199 46.4763L54.1379 49.2255L41.486 46.8367L33.9884 39.6919L26.6063 30.6597L23.4104 24.3273L13.432 3.34663Z"
            fill="url(#paint0_linear)"
          />
          <path
            d="M13.432 3.34663L55.5945 22.288L98.706 19.4476L83.6335 35.6983L69.9199 46.4763L54.1379 49.2255L41.486 46.8367L33.9884 39.6919L26.6063 30.6597L23.4104 24.3273L13.432 3.34663Z"
            stroke="#E56400"
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="0.705627"
            y="0.956421"
            width="103.222"
            height="64.7527"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear"
            x1="56.2072"
            y1="10.7238"
            x2="48.4987"
            y2="48.2762"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#AD1212" />
            <stop offset="1" stop-color="#F0C11B" />
          </linearGradient>
        </defs>
      </svg>

      {{/* höger öga */}}
      <svg
        width="94"
        height="60"
        x="180"
        y="80"
        v-if="letters.length >= 6 || winner.id== 0"
        viewBox="0 0 94 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d)">
          <path
            d="M83.1733 1.33569L43.9638 18.7622L3.99999 14.688L17.8838 31.1534L30.5392 42.1838L45.159 45.3604L56.9058 43.3793L63.9001 36.5576L70.7981 27.8717L73.7985 21.7237L83.1733 1.33569Z"
            fill="#F0C11B"
          />
          <path
            d="M83.1733 1.33569L43.9638 18.7622L3.99999 14.688L17.8838 31.1534L30.5392 42.1838L45.159 45.3604L56.9058 43.3793L63.9001 36.5576L70.7981 27.8717L73.7985 21.7237L83.1733 1.33569Z"
            fill="url(#paint0_linear)"
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="-1.52588e-05"
            y="0"
            width="93.8565"
            height="59.9352"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear"
            x1="43.4623"
            y1="7.34401"
            x2="50.3941"
            y2="44.5912"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#AD1212" />
            <stop offset="1" stop-color="#F0C11B" />
          </linearGradient>
        </defs>
      </svg>

      {{/* Näsa  */}}
      <svg
        width="42"
        height="49"
        x="150"
        y="110"
        v-if="letters.length >= 7 || winner.id== 0"
        viewBox="0 0 42 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d)">
          <path
            d="M36.2389 37.79L22.4515 2L5.52771 38.6347L21.8603 26.8223L36.2389 37.79Z"
            fill="black"
          />
          <path
            d="M36.2389 37.79L22.4515 2L5.52771 38.6347L21.8603 26.8223L36.2389 37.79Z"
            stroke="black"
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="0.272491"
            y="0.717407"
            width="41.0682"
            height="47.4422"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      {{/* Mun */}}
      <svg
        width="219"
        height="88"
        x="65"
        y="150"
        viewBox="0 0 219 88"
        v-if="letters.length >= 8 || winner.id== 0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d)">
          <path
            d="M39.2283 46.7963L6 2.00006L37.7515 23.2517L55.7194 18.9966L74.1796 34.3148L87.9631 23.2517L101.747 37.4352L119.961 23.2517L134.483 37.4352L150.235 18.9966L166.234 23.2517L213 2L174.111 46.7963L159.096 49.9167L156.389 65.2349L139.405 58.1431L132.021 74.3123L117.253 62.3982L106.423 78L94.1165 60.6961L81.3515 74.3123L75.4102 58.1431L61.6266 65.2349L55.7194 48.2147L39.2283 46.7963Z"
            fill="black"
          />
          <path
            d="M39.2283 46.7963L6 2.00006L37.7515 23.2517L55.7194 18.9966L74.1796 34.3148L87.9631 23.2517L101.747 37.4352L119.961 23.2517L134.483 37.4352L150.235 18.9966L166.234 23.2517L213 2L174.111 46.7963L159.096 49.9167L156.389 65.2349L139.405 58.1431L132.021 74.3123L117.253 62.3982L106.423 78L94.1165 60.6961L81.3515 74.3123L75.4102 58.1431L61.6266 65.2349L55.7194 48.2147L39.2283 46.7963Z"
            stroke="black"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="0.499992"
            y="0.499878"
            width="218"
            height="87.0001"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </svg>
  </div>
</template>

<script>
export default {
  props: ['letters', 'winner'],
  name: 'Hangman',
  data() {
    return {}
  }
}
</script>

<style></style>
