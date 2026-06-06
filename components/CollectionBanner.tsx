'use client';

export default function CollectionBanner() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
<section class="collection-banner" id="collection">
            <div class="collection-content">
                <div class="collection-left">
                    <span class="collection-tag">SEASON 1 DROP</span>
                    <h2>INFINITE VOID<br><span>CAPSULE</span></h2>
                    <p>The most powerful collection in existence. Inspired by Gojo's Domain Expansion — Infinite Void. Limited pieces. Unlimited energy.</p>
                    <a href="#products" class="btn btn-primary">EXPLORE NOW</a>
                </div>
                <div class="collection-right">
                    <div class="sukuna-art">
                        <!-- ENHANCED SUKUNA SVG -->
                        <svg viewBox="0 0 380 530" xmlns="http://www.w3.org/2000/svg" class="sukuna-svg">
                            <defs>
                                <!-- Sukuna skin - slightly darker warm tone -->
                                <radialGradient id="sSkin" cx="48%" cy="32%" r="60%">
                                    <stop offset="0%" stop-color="#f0d4b8"/>
                                    <stop offset="55%" stop-color="#e4c4a0"/>
                                    <stop offset="100%" stop-color="#d4ae88"/>
                                </radialGradient>
                                <!-- Dark hair gradient -->
                                <linearGradient id="sHair" x1="30%" y1="0%" x2="70%" y2="100%">
                                    <stop offset="0%" stop-color="#1a0a0c"/>
                                    <stop offset="50%" stop-color="#2c1216"/>
                                    <stop offset="100%" stop-color="#0d0508"/>
                                </linearGradient>
                                <!-- Robe gradient -->
                                <linearGradient id="sRobe" x1="0%" y1="0%" x2="30%" y2="100%">
                                    <stop offset="0%" stop-color="#100808"/>
                                    <stop offset="50%" stop-color="#0a0404"/>
                                    <stop offset="100%" stop-color="#060202"/>
                                </linearGradient>
                                <!-- Red sash gradient -->
                                <linearGradient id="sSash" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stop-color="#6b0010"/>
                                    <stop offset="50%" stop-color="#990018"/>
                                    <stop offset="100%" stop-color="#6b0010"/>
                                </linearGradient>
                                <!-- Face shadow -->
                                <radialGradient id="sFaceShadow" cx="50%" cy="70%" r="50%">
                                    <stop offset="0%" stop-color="#b08060" stop-opacity="0.4"/>
                                    <stop offset="100%" stop-color="#b08060" stop-opacity="0"/>
                                </radialGradient>
                                <!-- Aura -->
                                <radialGradient id="sAura" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stop-color="#CC0022" stop-opacity="0.3"/>
                                    <stop offset="60%" stop-color="#880010" stop-opacity="0.1"/>
                                    <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
                                </radialGradient>
                                <!-- Eye glow red -->
                                <radialGradient id="sEyeGlow" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stop-color="#ff6060"/>
                                    <stop offset="40%" stop-color="#dd1130"/>
                                    <stop offset="100%" stop-color="#880010"/>
                                </radialGradient>
                                <!-- Glow filter -->
                                <filter id="sgf1" x="-30%" y="-30%" width="160%" height="160%">
                                    <feGaussianBlur stdDeviation="5" result="blur"/>
                                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                                </filter>
                                <filter id="sgf2" x="-50%" y="-50%" width="200%" height="200%">
                                    <feGaussianBlur stdDeviation="9" result="blur"/>
                                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                                </filter>
                                <filter id="sshadow">
                                    <feGaussianBlur stdDeviation="2.5" result="blur"/>
                                    <feOffset dx="1" dy="3" result="offset"/>
                                    <feMerge><feMergeNode in="offset"/><feMergeNode in="SourceGraphic"/></feMerge>
                                </filter>
                            </defs>

                            <!-- Background aura -->
                            <ellipse cx="190" cy="295" rx="178" ry="245" fill="url(#sAura)" class="aura-ring"/>
                            <!-- Malevolent shrine faint rings -->
                            <circle cx="190" cy="295" r="165" fill="none" stroke="#CC0022" stroke-width="0.6" opacity="0.12"/>
                            <circle cx="190" cy="295" r="140" fill="none" stroke="#CC0022" stroke-width="0.4" opacity="0.08"/>

                            <!-- ===== BODY — TRADITIONAL BLACK ROBES ===== -->
                            <!-- Main outer robe -->
                            <path d="M100,390 L70,510 L310,510 L280,390 Z" fill="url(#sRobe)" stroke="#200808" stroke-width="0.8"/>
                            <!-- Robe fold highlights -->
                            <path d="M112,395 L88,505 L120,505 L148,395 Z" fill="#160a0a" opacity="0.6"/>
                            <path d="M268,395 L292,505 L260,505 L232,395 Z" fill="#160a0a" opacity="0.6"/>
                            <!-- Inner body visible through robe -->
                            <path d="M155,390 L148,504 L190,492 L232,504 L225,390 Z" fill="#0a0202"/>
                            <!-- Collar V-neck opening -->
                            <path d="M165,390 L190,432 L215,390" fill="none" stroke="#220a0a" stroke-width="2" stroke-linejoin="round"/>
                            <!-- Robe texture lines -->
                            <path d="M108,410 L95,500" stroke="#1a0808" stroke-width="0.6" opacity="0.7"/>
                            <path d="M272,410 L285,500" stroke="#1a0808" stroke-width="0.6" opacity="0.7"/>
                            <path d="M155,410 L152,500" stroke="#1a0808" stroke-width="0.6" opacity="0.4"/>
                            <path d="M225,410 L228,500" stroke="#1a0808" stroke-width="0.6" opacity="0.4"/>

                            <!-- Red sash/obi belt -->
                            <rect x="105" y="398" width="170" height="20" rx="3" fill="url(#sSash)" opacity="0.9"/>
                            <!-- Sash knot detail -->
                            <path d="M160,398 L190,418 L220,398" fill="none" stroke="#aa0022" stroke-width="1.8" stroke-linejoin="round"/>
                            <rect x="180" y="396" width="20" height="24" rx="2" fill="#880018" opacity="0.8"/>

                            <!-- ===== ARMS ===== -->
                            <!-- Left arm -->
                            <path d="M100,390 C86,410 66,445 50,490 L78,498 C90,460 108,428 122,408 Z" fill="url(#sRobe)" stroke="#1c0808" stroke-width="0.8"/>
                            <!-- Right arm -->
                            <path d="M280,390 C294,410 314,445 330,490 L302,498 C290,460 272,428 258,408 Z" fill="url(#sRobe)" stroke="#1c0808" stroke-width="0.8"/>
                            <!-- Extra arms (extra pair, King of Curses) — ghostly hint -->
                            <path d="M100,400 C80,425 55,462 38,495" fill="none" stroke="#1a0808" stroke-width="16" stroke-linecap="round" opacity="0.55"/>
                            <path d="M280,400 C300,425 325,462 342,495" fill="none" stroke="#1a0808" stroke-width="16" stroke-linecap="round" opacity="0.55"/>
                            <!-- Curse marks on arms -->
                            <path d="M68,450 L76,438" stroke="#8B0000" stroke-width="2" stroke-linecap="round" class="curse-mark"/>
                            <path d="M312,450 L304,438" stroke="#8B0000" stroke-width="2" stroke-linecap="round" class="curse-mark"/>
                            <path d="M60,468 L70,460" stroke="#8B0000" stroke-width="1.5" stroke-linecap="round" class="curse-mark" opacity="0.7"/>
                            <!-- Hands -->
                            <ellipse cx="62" cy="504" rx="18" ry="23" fill="url(#sSkin)" filter="url(#sshadow)"/>
                            <path d="M48,494 C50,484 56,480 64,484" fill="none" stroke="#c8a888" stroke-width="1" stroke-linecap="round"/>
                            <ellipse cx="318" cy="504" rx="18" ry="23" fill="url(#sSkin)" filter="url(#sshadow)"/>
                            <path d="M332,494 C330,484 324,480 316,484" fill="none" stroke="#c8a888" stroke-width="1" stroke-linecap="round"/>

                            <!-- ===== NECK ===== -->
                            <path d="M174,368 L174,395 C174,395 182,400 190,400 C198,400 206,395 206,395 L206,368 Z" fill="url(#sSkin)"/>
                            <!-- Curse mark on neck -->
                            <path d="M174,380 C178,374 182,378 186,374 C190,378 194,374 198,378 C202,374 206,380" fill="none" stroke="#8B0000" stroke-width="1.8" stroke-linecap="round" class="curse-mark"/>

                            <!-- ===== HEAD ===== -->
                            <!-- Head shape - wider, more angular jaw for Sukuna's look -->
                            <path d="M120,265 C116,222 124,178 142,158 C156,142 170,132 190,130 C210,132 224,142 238,158 C256,178 264,222 260,265 C257,292 253,315 242,330 C232,344 218,356 206,363 C200,366 190,368 180,366 C168,364 154,356 142,342 C132,328 124,296 120,265 Z" fill="url(#sSkin)"/>
                            <!-- Face shadow -->
                            <ellipse cx="190" cy="330" rx="62" ry="28" fill="url(#sFaceShadow)"/>
                            <!-- Cheekbone shadows — gives gaunt look -->
                            <path d="M125,280 C130,270 140,266 150,268" fill="none" stroke="#c09870" stroke-width="1" opacity="0.4" stroke-linecap="round"/>
                            <path d="M255,280 C250,270 240,266 230,268" fill="none" stroke="#c09870" stroke-width="1" opacity="0.4" stroke-linecap="round"/>
                            <!-- Jaw muscle shadow -->
                            <path d="M124,295 C122,308 124,322 132,332" fill="none" stroke="rgba(160,110,70,0.3)" stroke-width="3" stroke-linecap="round"/>
                            <path d="M256,295 C258,308 256,322 248,332" fill="none" stroke="rgba(160,110,70,0.3)" stroke-width="3" stroke-linecap="round"/>

                            <!-- ===== DARK HAIR — flowing & spiky ===== -->
                            <!-- Main hair mass back -->
                            <path d="M118,258 C112,205 120,160 138,140 C152,124 168,115 190,113 C212,115 228,124 242,140 C260,160 268,205 262,258 C256,225 244,200 225,186 C212,178 200,175 190,174 C180,175 168,178 155,186 C136,200 124,225 118,258 Z" fill="url(#sHair)"/>
                            <!-- Hair flowing down sides -->
                            <path d="M118,258 C108,282 102,308 95,355" stroke="#1e0e10" stroke-width="14" fill="none" stroke-linecap="round"/>
                            <path d="M262,258 C272,282 278,308 285,355" stroke="#1e0e10" stroke-width="14" fill="none" stroke-linecap="round"/>
                            <!-- Hair side pieces -->
                            <path d="M118,258 C110,265 106,275 105,295 C104,310 106,330 110,350" fill="#1a0e10" stroke="#2c1216" stroke-width="0.5"/>
                            <path d="M262,258 C270,265 274,275 275,295 C276,310 274,330 270,350" fill="#1a0e10" stroke="#2c1216" stroke-width="0.5"/>
                            <!-- Front hair strands -->
                            <path d="M158,180 C154,165 150,148 153,130 C156,116 163,106 172,100" fill="none" stroke="#2a1218" stroke-width="2.5" stroke-linecap="round" opacity="0.8"/>
                            <path d="M178,176 C175,160 173,143 176,127 C178,115 184,107 192,103" fill="none" stroke="#241016" stroke-width="2" stroke-linecap="round" opacity="0.7"/>
                            <path d="M200,176 C202,161 204,144 202,128 C200,117 195,109 188,104" fill="none" stroke="#241016" stroke-width="2" stroke-linecap="round" opacity="0.7"/>
                            <path d="M218,180 C222,165 226,148 222,130 C219,118 212,108 204,103" fill="none" stroke="#2a1218" stroke-width="2.5" stroke-linecap="round" opacity="0.8"/>
                            <!-- Hair highlight (subtle sheen) -->
                            <path d="M162,155 C168,142 178,133 190,129" fill="none" stroke="rgba(60,30,35,0.6)" stroke-width="1.5" stroke-linecap="round"/>

                            <!-- ===== FACIAL TATTOO / CURSE MARKS ===== -->
                            <!-- Upper cheek marks -->
                            <path d="M128,250 L144,236" stroke="#8B0000" stroke-width="2.8" stroke-linecap="round" class="curse-mark"/>
                            <path d="M252,250 L236,236" stroke="#8B0000" stroke-width="2.8" stroke-linecap="round" class="curse-mark"/>
                            <!-- Mid cheek marks -->
                            <path d="M122,270 L136,262" stroke="#8B0000" stroke-width="2" stroke-linecap="round" class="curse-mark" opacity="0.8"/>
                            <path d="M258,270 L244,262" stroke="#8B0000" stroke-width="2" stroke-linecap="round" class="curse-mark" opacity="0.8"/>
                            <!-- Lower cheek marks -->
                            <path d="M126,288 L136,282" stroke="#8B0000" stroke-width="1.5" stroke-linecap="round" class="curse-mark" opacity="0.7"/>
                            <path d="M254,288 L244,282" stroke="#8B0000" stroke-width="1.5" stroke-linecap="round" class="curse-mark" opacity="0.7"/>
                            <!-- Forehead mark (crown) -->
                            <path d="M174,205 L182,196 L190,192 L198,196 L206,205" fill="none" stroke="#8B0000" stroke-width="2" stroke-linejoin="round" class="curse-mark" opacity="0.85"/>
                            <!-- Under-eye marks -->
                            <path d="M134,275 L142,272" stroke="#8B0000" stroke-width="1.5" stroke-linecap="round" class="curse-mark" opacity="0.75"/>
                            <path d="M246,275 L238,272" stroke="#8B0000" stroke-width="1.5" stroke-linecap="round" class="curse-mark" opacity="0.75"/>

                            <!-- ===== FOUR EYES ===== -->
                            <!-- Eye whites for upper pair -->
                            <ellipse cx="162" cy="255" rx="20" ry="14" fill="#f0e8e0"/>
                            <ellipse cx="218" cy="255" rx="20" ry="14" fill="#f0e8e0"/>
                            <!-- Upper eye iris (red) -->
                            <ellipse cx="162" cy="255" rx="13" ry="11" fill="#CC0011"/>
                            <ellipse cx="218" cy="255" rx="13" ry="11" fill="#CC0011"/>
                            <!-- Upper eye pupil (vertical slit like Sukuna) -->
                            <ellipse cx="162" cy="255" rx="4" ry="9" fill="#1a0002"/>
                            <ellipse cx="218" cy="255" rx="4" ry="9" fill="#1a0002"/>
                            <!-- Upper eye rim / outline -->
                            <ellipse cx="162" cy="255" rx="20" ry="14" fill="none" stroke="#1a0002" stroke-width="1.2"/>
                            <ellipse cx="218" cy="255" rx="20" ry="14" fill="none" stroke="#1a0002" stroke-width="1.2"/>
                            <!-- Upper eye glow -->
                            <ellipse cx="162" cy="255" rx="22" ry="16" fill="#CC0011" opacity="0.2" filter="url(#sgf1)"/>
                            <ellipse cx="218" cy="255" rx="22" ry="16" fill="#CC0011" opacity="0.2" filter="url(#sgf1)"/>
                            <!-- Upper eye light reflection -->
                            <ellipse cx="156" cy="250" rx="4" ry="3" fill="rgba(255,220,220,0.55)"/>
                            <ellipse cx="212" cy="250" rx="4" ry="3" fill="rgba(255,220,220,0.55)"/>
                            <!-- Upper eyelashes (top lid line) -->
                            <path d="M142,248 C150,244 158,243 168,244 C176,245 182,248 182,251" fill="none" stroke="#0d0002" stroke-width="2" stroke-linecap="round"/>
                            <path d="M198,248 C206,244 214,243 224,244 C232,245 238,248 238,251" fill="none" stroke="#0d0002" stroke-width="2" stroke-linecap="round"/>

                            <!-- Lower eye pair (slightly below & smaller) -->
                            <ellipse cx="159" cy="273" rx="13" ry="9" fill="#f0e8e0"/>
                            <ellipse cx="221" cy="273" rx="13" ry="9" fill="#f0e8e0"/>
                            <!-- Lower iris -->
                            <ellipse cx="159" cy="273" rx="9" ry="7" fill="#AA0000"/>
                            <ellipse cx="221" cy="273" rx="9" ry="7" fill="#AA0000"/>
                            <!-- Lower pupil -->
                            <ellipse cx="159" cy="273" rx="3" ry="5.5" fill="#180000"/>
                            <ellipse cx="221" cy="273" rx="3" ry="5.5" fill="#180000"/>
                            <!-- Lower eye outline -->
                            <ellipse cx="159" cy="273" rx="13" ry="9" fill="none" stroke="#200004" stroke-width="1"/>
                            <ellipse cx="221" cy="273" rx="13" ry="9" fill="none" stroke="#200004" stroke-width="1"/>
                            <!-- Lower eye glow -->
                            <ellipse cx="159" cy="273" rx="14" ry="10" fill="#AA0000" opacity="0.18" filter="url(#sgf1)"/>
                            <ellipse cx="221" cy="273" rx="14" ry="10" fill="#AA0000" opacity="0.18" filter="url(#sgf1)"/>

                            <!-- ===== NOSE ===== -->
                            <path d="M184,310 C186,314 188,316 190,316 C192,316 194,314 196,310" fill="none" stroke="#c09870" stroke-width="1.5" stroke-linecap="round"/>
                            <path d="M184,314 C182,316 180,315 180,312" fill="none" stroke="#b89060" stroke-width="1" stroke-linecap="round" opacity="0.6"/>
                            <path d="M196,314 C198,316 200,315 200,312" fill="none" stroke="#b89060" stroke-width="1" stroke-linecap="round" opacity="0.6"/>

                            <!-- ===== MOUTH (Sukuna's iconic smirk) ===== -->
                            <!-- Main smirk - curved up on right -->
                            <path d="M164,332 C172,342 182,347 190,346 C202,347 214,340 222,330" fill="none" stroke="#6a3030" stroke-width="2.5" stroke-linecap="round"/>
                            <!-- Lip detail -->
                            <path d="M168,336 C175,333 184,333 190,334 C196,333 206,333 215,335" fill="none" stroke="#8a4040" stroke-width="1" stroke-linecap="round" opacity="0.5"/>
                            <!-- Smirk corner (signature) -->
                            <path d="M220,330 C222,328 224,326 224,322" fill="none" stroke="#6a3030" stroke-width="1.5" stroke-linecap="round" opacity="0.7"/>

                            <!-- ===== CURSED ENERGY PARTICLES ===== -->
                            <g filter="url(#sgf2)">
                                <circle cx="42" cy="300" r="6" fill="#FF2244" opacity="0.8"/>
                                <circle cx="338" cy="325" r="8" fill="#CC0022" opacity="0.6"/>
                                <circle cx="56" cy="445" r="4" fill="#FF2244" opacity="0.7"/>
                                <circle cx="326" cy="455" r="5" fill="#CC0022" opacity="0.5"/>
                                <circle cx="110" cy="148" r="3.5" fill="#FF4466" opacity="0.7"/>
                                <circle cx="270" cy="135" r="4.5" fill="#CC0022" opacity="0.7"/>
                                <circle cx="190" cy="88" r="5" fill="#FF2244" opacity="0.6"/>
                            </g>

                            <!-- Malevolent shrine energy lines -->
                            <g opacity="0.1" stroke="#FF2244" stroke-width="0.8" fill="none" filter="url(#sgf1)">
                                <path d="M18,195 L95,242"/>
                                <path d="M362,195 L285,242"/>
                                <path d="M65,468 L115,415"/>
                                <path d="M315,468 L265,415"/>
                            </g>

                            <!-- Domain rings at feet -->
                            <ellipse cx="190" cy="500" rx="48" ry="10" fill="none" stroke="#CC0022" stroke-width="0.7" opacity="0.2"/>
                            <ellipse cx="190" cy="500" rx="33" ry="7" fill="none" stroke="#FF2244" stroke-width="0.4" opacity="0.15"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="collection-particles" id="collectionParticles"></div>
        </section>
    ` }} />
  );
}
