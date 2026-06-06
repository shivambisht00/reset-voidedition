'use client';

export default function Newsletter() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `
<section class="newsletter">
            <div class="newsletter-inner">
                <div class="nl-kanji">呪</div>
                <div class="nl-content">
                    <h2>DOMAIN EXPANSION:<br><span>YOUR INBOX</span></h2>
                    <p>Get early access to drops, exclusive discounts, and cursed energy updates.</p>
                    <div class="nl-form">
                        <input type="email" placeholder="Enter your email, sorcerer..." class="nl-input" id="nlEmail"/>
                        <button class="btn btn-primary nl-btn" id="nlBtn">SUBSCRIBE</button>
                    </div>
                    <p class="nl-note">No spam. Only cursed technique notifications.</p>
                </div>
            </div>
        </section>
    ` }} />
  );
}
