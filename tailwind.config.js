module.exports = {
  mode: "jit",
  content: [
    "./assets/**/*.css",
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./*.{vue,js}",
  ],
  theme: {
    aspectRatio:{
      40:'40',
      21:'21',
    },
    extend: {
      typography:{
        'xs':{
          css: {
            fontSize: '0.8125rem'
          },
        },
        '2xs':{
          css:{
            fontSize:'0.75rem',
          }
        }
      },
      screens:{
        xs:"320px",
        "3xl":"1600px",
      }
    },
  },
  variants: {
    extend: {
      margin:["first","last"],
      padding:["first","last"],
      backgroundColor:['hover'],
      borderColor:["checked"],
      opacity:["disabled","hover"],
      ringWidth:["hover"],
      borderRadius:["first","last"],
      scale:["group-hover"]
    },
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio")
  ],
  daisyui:{
    styled:true,
    themes:[
      {
        mytheme:{
          primary:"#1e9b61",
          "primary-focus":"#198754",
          "primary-content":"#ffffff",
          secondary:"#8f018f",
          "secondary-focus":"#800080",
          "secondary-content":"#ffffff",
          accent:"#ffffff",
          "accent-focus":"#ffffff",
          "accent-content":"#323232",
          neutral:"#3d4451",
          "neutral-focus":"#2a2e37",
          "neutral-content":"#ffffff",
          "base-100":"#ffffff",
          "base-200":"#f9fafb",
          "base-300":"#d1d5db",
          "base-content":"#1f2937",
          info:"#2094f3",
          success:"#02850c",
          warning:"#ff9900",
          error:"#ff5724",
          '--rounded-box':'1rem',
          '--rounded-btn':'0.85rem',
          '--rounded-badge':'1.9rem',
          '--animation-btn':'0.25s',
          '--animation-input':'0.2s',
          '--padding-card':'1rem',
          '--btn-text-case':'uppercase',
          '--navbar-padding':'0.5rem',
          '--border-btn':'1px',
          '--focus-ring':'2px',
          '--focus-ring-offset':'2px'
        }
      }
    ],
    base:true,
    utils:true,
    logs:true,
    rtl:true
  }
};