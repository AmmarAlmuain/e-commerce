export default function Logo({ className }: { className?: string }) {
  return (
    <>
      <svg
        width="500"
        height="500"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className}`}
      >
        <g clipPath="url(#clip0_4_2)">
          <circle cx="250" cy="250" r="250" fill="#FFD500" />
          <path
            d="M388.723 410.35C379.423 410.35 372.073 407.65 366.673 402.25C361.273 396.85 357.223 390.1 354.523 382C351.823 373.6 350.023 365.05 349.123 356.35C348.523 347.35 348.223 339.4 348.223 332.5C348.223 304 350.923 275.95 356.323 248.35C361.723 220.75 367.273 193.15 372.973 165.55C373.573 162.55 374.023 159.7 374.323 157C374.923 154 375.223 151 375.223 148C375.223 144.4 374.473 140.8 372.973 137.2C371.773 133.6 368.773 131.8 363.973 131.8C356.173 131.8 347.323 135.25 337.423 142.15C327.823 148.75 317.773 157.6 307.273 168.7C296.773 179.8 286.423 192.1 276.223 205.6C266.023 218.8 256.423 232.15 247.423 245.65C238.423 259.15 230.473 271.6 223.573 283C216.973 294.1 212.023 303.1 208.723 310C202.423 322.9 197.173 336.1 192.973 349.6C189.073 362.8 185.173 376.45 181.273 390.55C180.373 393.55 179.173 396.85 177.673 400.45C176.173 404.05 173.323 405.85 169.123 405.85C165.223 405.85 162.673 404.05 161.473 400.45C160.573 397.15 160.123 394 160.123 391C160.123 383.5 161.323 374.05 163.723 362.65C166.123 350.95 169.273 338.35 173.173 324.85C177.373 311.05 181.573 297.25 185.773 283.45C190.273 269.65 194.473 256.75 198.373 244.75C202.573 232.75 205.873 222.55 208.273 214.15C211.873 201.85 215.923 188.2 220.423 173.2C224.923 158.2 228.823 143.2 232.123 128.2C235.723 112.9 237.523 99.1 237.523 86.8C237.523 79 236.023 71.5 233.023 64.3C230.323 57.1 224.173 53.5 214.573 53.5C200.473 53.5 185.623 57.1 170.023 64.3C154.423 71.5 139.273 81.25 124.573 93.55C109.873 105.85 96.5227 119.5 84.5227 134.5C72.5227 149.2 62.9227 164.35 55.7227 179.95C48.5227 195.55 44.9227 210.4 44.9227 224.5C44.9227 244.9 50.0227 261.4 60.2227 274C70.4227 286.3 86.1727 292.45 107.473 292.45C116.173 292.45 124.273 290.35 131.773 286.15C139.273 281.65 147.073 278.8 155.173 277.6L158.773 280.75C158.173 282.85 155.773 285.1 151.573 287.5C147.373 289.6 142.423 291.7 136.723 293.8C131.323 295.6 126.073 297.25 120.973 298.75C116.173 299.95 112.723 300.55 110.623 300.55C84.2227 300.55 64.2727 294.25 50.7727 281.65C37.5727 268.75 30.9727 248.95 30.9727 222.25C30.9727 205.75 34.7227 189.1 42.2227 172.3C49.7227 155.5 59.7727 139.6 72.3727 124.6C85.2727 109.3 99.6727 95.65 115.573 83.65C131.473 71.35 147.973 61.75 165.073 54.85C182.473 47.95 199.273 44.5 215.473 44.5C225.373 44.5 233.023 46.9 238.423 51.7C243.823 56.2 247.573 62.2 249.673 69.7C251.773 77.2 252.823 85.15 252.823 93.55C252.823 107.95 250.873 123.7 246.973 140.8C243.073 157.9 238.123 175.45 232.123 193.45C226.123 211.15 219.973 228.55 213.673 245.65C207.673 262.45 202.423 277.9 197.923 292C200.923 284.8 206.173 275.5 213.673 264.1C221.173 252.7 230.173 240.25 240.673 226.75C251.473 213.25 262.873 199.75 274.873 186.25C287.173 172.75 299.323 160.45 311.323 149.35C323.623 137.95 335.173 128.95 345.973 122.35C356.773 115.45 366.073 112 373.873 112C379.873 112 385.273 113.95 390.073 117.85C394.873 121.45 397.273 126.55 397.273 133.15C397.273 139.45 396.373 145.6 394.573 151.6C392.773 157.6 391.123 163.6 389.623 169.6C382.723 197.2 376.723 225.55 371.623 254.65C366.823 283.45 364.423 312.25 364.423 341.05C364.423 344.95 364.573 350.05 364.873 356.35C365.173 362.35 365.923 368.5 367.123 374.8C368.623 381.1 370.873 386.35 373.873 390.55C377.173 394.75 381.673 396.85 387.373 396.85C394.273 396.85 400.573 394.75 406.273 390.55C411.973 386.65 417.073 382.6 421.573 378.4C426.373 373.9 430.273 371.35 433.273 370.75L435.523 373C435.223 376 433.123 379.6 429.223 383.8C425.623 388.3 421.273 392.5 416.173 396.4C411.073 400.3 405.973 403.6 400.873 406.3C395.773 409 391.723 410.35 388.723 410.35Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_4_2">
            <rect width="500" height="500" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}
