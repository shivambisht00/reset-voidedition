'use client';

export default function CharsStrip() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
<section class="chars-strip">
            <div class="section-header">
                <span class="section-tag">— INSPIRED BY —</span>
                <h2 class="section-title">THE <span>SORCERERS</span></h2>
            </div>
            <div class="chars-grid">
                <div class="char-card" data-char="gojo">
                    <div class="char-card-bg"></div>
                    <div class="char-icon">
                        <svg viewBox="0 0 120 140" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <radialGradient id="gojoMiniBg"><stop offset="0%" stop-color="#0d0d1a"/><stop offset="100%" stop-color="#050510"/></radialGradient>
                                <filter id="gf"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                                <linearGradient id="gojoMiniHair" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ffffff"/><stop offset="100%" stop-color="#cad0e6"/></linearGradient>
                            </defs>
                            <circle cx="60" cy="65" r="55" fill="url(#gojoMiniBg)" stroke="#7B2FFF" stroke-width="1.5"/>
                            <path d="M35,118 L30,138 L90,138 L85,118 Z" fill="#0b0b14"/>
                            <ellipse cx="60" cy="85" rx="22" ry="25" fill="#fcf0e3"/>
                            <path d="M35,76 C30,42 42,30 60,28 C78,30 90,42 85,76 C81,64 76,55 60,53 C44,55 39,64 35,76Z" fill="url(#gojoMiniHair)"/>
                            <path d="M38,55 L32,38 L46,48 L48,26 L58,44 L64,24 L68,44 L78,28 L80,48 L90,40 L84,58" fill="url(#gojoMiniHair)"/>
                            <rect x="39" y="74" width="42" height="13" rx="2" fill="#121226"/>
                            <ellipse cx="49" cy="80" rx="6" ry="3.5" fill="#a370ff" opacity="0.85" filter="url(#gf)"/>
                            <ellipse cx="71" cy="80" rx="6" ry="3.5" fill="#a370ff" opacity="0.85" filter="url(#gf)"/>
                            <path d="M53,100 C56,104 64,104 67,100" fill="none" stroke="#ba7b70" stroke-width="2" stroke-linecap="round"/>
                            <text x="60" y="130" text-anchor="middle" font-size="9" fill="#7B2FFF" font-family="Noto Serif JP" opacity="0.8">五条</text>
                        </svg>
                    </div>
                    <h3>GOJO SATORU</h3>
                    <p>Infinite Collection</p>
                    <span class="char-tag purple">Special Grade</span>
                </div>
                <div class="char-card" data-char="sukuna">
                    <div class="char-card-bg red"></div>
                    <div class="char-icon">
                        <svg viewBox="0 0 120 140" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <radialGradient id="sukunaMiniBg"><stop offset="0%" stop-color="#1a0008"/><stop offset="100%" stop-color="#080004"/></radialGradient>
                                <filter id="sf"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                                <linearGradient id="sukunaMiniHair" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#3b1b22"/><stop offset="100%" stop-color="#1c0a0d"/></linearGradient>
                            </defs>
                            <circle cx="60" cy="65" r="55" fill="url(#sukunaMiniBg)" stroke="#CC0022" stroke-width="1.5"/>
                            <path d="M35,118 L30,138 L90,138 L85,118 Z" fill="#140608"/>
                            <ellipse cx="60" cy="85" rx="22" ry="25" fill="#eccbb0"/>
                            <path d="M36,75 C32,44 40,34 60,32 C80,34 88,44 84,75 C81,64 75,54 60,53 C45,54 39,64 36,75Z" fill="url(#sukunaMiniHair)"/>
                            <path d="M36,60 L30,42 L42,48 L46,26 L56,44 L62,28 L68,44 L76,32 L80,50 L88,44 L84,62" fill="url(#sukunaMiniHair)"/>
                            <path d="M54,44 L60,38 L66,44" fill="none" stroke="#6b0211" stroke-width="2"/>
                            <path d="M41,79 L49,76 M79,79 L71,76" stroke="#6b0211" stroke-width="1.5" stroke-linecap="round"/>
                            <ellipse cx="48" cy="74" rx="5" ry="3.5" fill="#0f0204"/><ellipse cx="72" cy="74" rx="5" ry="3.5" fill="#0f0204"/>
                            <ellipse cx="48" cy="83" rx="4" ry="2.5" fill="#0f0204"/><ellipse cx="72" cy="83" rx="4" ry="2.5" fill="#0f0204"/>
                            <circle cx="48" cy="74" r="1.5" fill="#ff2233" filter="url(#sf)"/><circle cx="72" cy="74" r="1.5" fill="#ff2233" filter="url(#sf)"/>
                            <circle cx="48" cy="83" r="1" fill="#ff2233" filter="url(#sf)"/><circle cx="72" cy="83" r="1" fill="#ff2233" filter="url(#sf)"/>
                            <path d="M52,100 C56,105 64,105 67,100" fill="none" stroke="#6b0211" stroke-width="2" stroke-linecap="round"/>
                            <text x="60" y="130" text-anchor="middle" font-size="9" fill="#CC0022" font-family="Noto Serif JP" opacity="0.8">宿儺</text>
                        </svg>
                    </div>
                    <h3>RYOMEN SUKUNA</h3>
                    <p>King of Curses</p>
                    <span class="char-tag red">Special Grade</span>
                </div>
                <div class="char-card" data-char="yuji">
                    <div class="char-card-bg orange"></div>
                    <div class="char-icon">
                        <svg viewBox="0 0 120 140" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <radialGradient id="yujiMiniBg"><stop offset="0%" stop-color="#241100"/><stop offset="100%" stop-color="#0f0700"/></radialGradient>
                                <filter id="yf"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                                <linearGradient id="yujiMiniHair" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#ff94b8"/><stop offset="100%" stop-color="#bf5475"/></linearGradient>
                            </defs>
                            <circle cx="60" cy="65" r="55" fill="url(#yujiMiniBg)" stroke="#FF6600" stroke-width="1.5"/>
                            <path d="M35,116 L30,138 L90,138 L85,116 Z" fill="#141424"/>
                            <path d="M42,116 C42,106 78,106 78,116 Z" fill="#990011"/>
                            <ellipse cx="60" cy="83" rx="22" ry="25" fill="#f7d4b2"/>
                            <path d="M36,72 L32,50 L42,54 L46,34 L56,50 L62,32 L68,50 L76,36 L80,56 L88,48 L84,72" fill="url(#yujiMiniHair)"/>
                            <path d="M38,70 C34,60 42,55 60,54 C78,55 86,60 82,70 Z" fill="url(#yujiMiniHair)"/>
                            <path d="M40,84 L46,84 M80,84 L74,84" stroke="#8a5541" stroke-width="1.5" stroke-linecap="round"/>
                            <ellipse cx="49" cy="76" rx="5" ry="3" fill="#ffffff"/><ellipse cx="71" cy="76" rx="5" ry="3" fill="#ffffff"/>
                            <circle cx="49" cy="76" r="2.5" fill="#543111"/><circle cx="71" cy="76" r="2.5" fill="#543111"/>
                            <path d="M52,98 L68,98" stroke="#8a5541" stroke-width="2" stroke-linecap="round"/>
                            <text x="60" y="130" text-anchor="middle" font-size="9" fill="#FF6600" font-family="Noto Serif JP" opacity="0.8">虎杖</text>
                        </svg>
                    </div>
                    <h3>YUJI ITADORI</h3>
                    <p>Divergent Fist</p>
                    <span class="char-tag orange">Grade 1</span>
                </div>
                <div class="char-card" data-char="nobara">
                    <div class="char-card-bg pink"></div>
                    <div class="char-icon">
                        <svg viewBox="0 0 120 140" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <radialGradient id="nobaraMiniBg"><stop offset="0%" stop-color="#240a1d"/><stop offset="100%" stop-color="#0f020b"/></radialGradient>
                                <linearGradient id="nobaraMiniHair" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#d49b46"/><stop offset="100%" stop-color="#8c5e1c"/></linearGradient>
                            </defs>
                            <circle cx="60" cy="65" r="55" fill="url(#nobaraMiniBg)" stroke="#FF6699" stroke-width="1.5"/>
                            <path d="M35,118 L30,138 L90,138 L85,118 Z" fill="#121221"/>
                            <ellipse cx="60" cy="85" rx="21" ry="24" fill="#fae6d4"/>
                            <path d="M36,78 C33,52 42,42 60,40 C78,42 86,52 84,78 C82,92 84,100 81,104 C74,75 44,75 38,104 C36,100 37,92 36,78Z" fill="url(#nobaraMiniHair)"/>
                            <path d="M42,50 C50,44 64,44 74,52" fill="none" stroke="#704712" stroke-width="2" opacity="0.5"/>
                            <ellipse cx="48" cy="78" rx="5" ry="3.5" fill="#ffffff"/><ellipse cx="72" cy="78" rx="5" ry="3.5" fill="#ffffff"/>
                            <circle cx="48" cy="78" r="2.5" fill="#945816"/><circle cx="72" cy="78" r="2.5" fill="#945816"/>
                            <path d="M51,98 C55,103 65,103 69,98" fill="none" stroke="#a16254" stroke-width="2" stroke-linecap="round"/>
                            <text x="60" y="130" text-anchor="middle" font-size="9" fill="#FF6699" font-family="Noto Serif JP" opacity="0.8">釘崎</text>
                        </svg>
                    </div>
                    <h3>NOBARA KUGISAKI</h3>
                    <p>Straw Doll Technique</p>
                    <span class="char-tag pink">Grade 3</span>
                </div>
                <div class="char-card" data-char="megumi">
                    <div class="char-card-bg blue"></div>
                    <div class="char-icon">
                        <svg viewBox="0 0 120 140" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <radialGradient id="megumiMiniBg"><stop offset="0%" stop-color="#001126"/><stop offset="100%" stop-color="#00060f"/></radialGradient>
                                <linearGradient id="megumiMiniHair" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#1c2430"/><stop offset="100%" stop-color="#090d14"/></linearGradient>
                            </defs>
                            <circle cx="60" cy="65" r="55" fill="url(#megumiMiniBg)" stroke="#0066FF" stroke-width="1.5"/>
                            <path d="M35,118 L30,138 L90,138 L85,118 Z" fill="#121221"/>
                            <ellipse cx="60" cy="85" rx="22" ry="25" fill="#faf0e3"/>
                            <path d="M34,74 L26,52 L38,58 L40,32 L52,52 L58,26 L66,52 L76,32 L80,58 L92,50 L84,74" fill="url(#megumiMiniHair)"/>
                            <path d="M37,72 C33,62 42,56 60,55 C78,56 85,62 81,72 Z" fill="url(#megumiMiniHair)"/>
                            <path d="M42,73 L54,73 M78,73 L66,73" stroke="#222" stroke-width="2" stroke-linecap="round"/>
                            <ellipse cx="48" cy="78" rx="5" ry="3.5" fill="#ffffff"/><ellipse cx="72" cy="78" rx="5" ry="3.5" fill="#ffffff"/>
                            <circle cx="48" cy="78" r="2.5" fill="#19382c"/><circle cx="72" cy="78" r="2.5" fill="#19382c"/>
                            <path d="M53,99 L67,99" stroke="#9e7368" stroke-width="2" stroke-linecap="round"/>
                            <text x="60" y="130" text-anchor="middle" font-size="9" fill="#0066FF" font-family="Noto Serif JP" opacity="0.8">伏黒</text>
                        </svg>
                    </div>
                    <h3>FUSHIGURO MEGUMI</h3>
                    <p>Ten Shadows</p>
                    <span class="char-tag blue">Grade 2</span>
                </div>
            </div>
        </section>
    ` }} />
  );
}
