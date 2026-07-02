function CatIllustration({ size = 300, className = '' }) {
  return (
    <svg
      className={`cat-illustration ${className}`.trim()}
      viewBox="0 0 300 320"
      width={size}
      style={{ height: 'auto' }}
      fill="none"
      aria-hidden="true"
    >
      {/* contorno durazno: crea el resplandor que separa a la gatita del fondo navy */}
      <g
        stroke="#FFD3AC"
        strokeWidth="14"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
        opacity="0.9"
      >
        <path d="M215 260 C 260 250, 275 190, 250 140 C 235 110, 245 90, 260 80" />
        <path
          d="M95 300 C 80 260, 80 220, 105 195 C 90 180, 88 160, 100 145
                  C 88 130, 90 108, 108 95 C 100 75, 112 55, 135 50
                  C 132 35, 145 20, 165 22 C 182 24, 190 40, 185 55
                  C 205 62, 215 82, 205 100
                  C 218 112, 218 132, 205 145
                  C 218 165, 212 190, 195 200
                  C 210 225, 205 265, 185 300 Z"
        />
        <path d="M112 96 L 100 55 L 140 78 Z" />
        <path d="M178 58 L 190 20 L 205 62 Z" />
        <path d="M110 290 L 108 305 M150 300 L 148 312 M175 295 L 178 308" />
      </g>

      {/* cuerpo solido negro: es lo que hace que se lea como una gatita "negra" */}
      <g
        fill="#0d0d0f"
        stroke="#0d0d0f"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        <path
          d="M215 260 C 260 250, 275 190, 250 140 C 235 110, 245 90, 260 80"
          fill="none"
          strokeWidth="8"
        />
        <path
          d="M95 300 C 80 260, 80 220, 105 195 C 90 180, 88 160, 100 145
                  C 88 130, 90 108, 108 95 C 100 75, 112 55, 135 50
                  C 132 35, 145 20, 165 22 C 182 24, 190 40, 185 55
                  C 205 62, 215 82, 205 100
                  C 218 112, 218 132, 205 145
                  C 218 165, 212 190, 195 200
                  C 210 225, 205 265, 185 300 Z"
        />
        <path d="M112 96 L 100 55 L 140 78 Z" />
        <path d="M178 58 L 190 20 L 205 62 Z" />
        <path
          d="M110 290 L 108 305 M150 300 L 148 312 M175 295 L 178 308"
          fill="none"
          strokeWidth="8"
        />
      </g>

      {/* ojos grandes y blancos, inspirados en Jiji */}
      <circle cx="130" cy="88" r="14" fill="#f5f0e8" />
      <circle cx="170" cy="86" r="14" fill="#f5f0e8" />
      <circle cx="132" cy="90" r="5" fill="#0d0d0f" />
      <circle cx="172" cy="88" r="5" fill="#0d0d0f" />

      <path d="M147 102 L 155 102 L 151 108 Z" fill="#FFD3AC" />

      <path
        d="M95 100 L 50 90 M95 108 L 48 108 M95 116 L 50 126"
        stroke="#FFD3AC"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M198 95 L 243 85 M200 103 L 245 103 M198 111 L 243 121"
        stroke="#FFD3AC"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default CatIllustration
