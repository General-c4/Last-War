// translations.js - Multi-language support for Last War Tutorial
// Languages: Arabic (ar), English (en), Chinese (zh)

(function () {
  // Save original Arabic content on first load
  const originals = {};
  function saveOriginals() {
    originals.pageTitle = document.title;
    originals.siteSubtitle = document.querySelector('.logo-text span').textContent;
    originals.navItems = [];
    document.querySelectorAll('#navMenu li a').forEach(a => originals.navItems.push(a.innerHTML));
    originals.sidebarNavItems = [];
    document.querySelectorAll('#sidebarNav li a').forEach(a => originals.sidebarNavItems.push(a.innerHTML));
    originals.heroContent = document.querySelector('.hero-content').innerHTML;
    const cardIds = ['overview','story','timeline','resources','buildings','rewards','stores','professions','map','next'];
    originals.cardHeaders = {};
    originals.cardBodies = {};
    cardIds.forEach(id => {
      const h = document.querySelector('#' + id + ' .card-header h3');
      if (h) originals.cardHeaders[id] = h.textContent;
      const b = document.querySelector('#' + id + ' .card-body');
      if (b) originals.cardBodies[id] = b.innerHTML;
    });
    originals.sidebarHeader = document.querySelector('.sidebar .card-header h3').textContent;
    originals.sidebarBody = document.querySelector('.sidebar .card-body').innerHTML;
    originals.footerSections = [];
    document.querySelectorAll('.footer-section').forEach(s => originals.footerSections.push(s.innerHTML));
    originals.copyright = document.querySelector('.copyright').innerHTML;
  }

  // ===== ENGLISH TRANSLATIONS =====
  const en = {
    dir: 'ltr',
    pageTitle: '🐊 Season 6 - The Lost Jungle',
    siteSubtitle: 'Your Complete Guide to Last War',
    nav: [
      '<i class="fas fa-eye"></i> Overview',
      '<i class="fas fa-user-cog"></i> Professions',
      '<i class="fas fa-calendar-alt"></i> Timeline',
      '<i class="fas fa-store"></i> Stores',
      '<i class="fas fa-trophy"></i> Rewards',
      '<i class="fas fa-arrow-right"></i> What\'s Next?'
    ],
    heroContent: `
      <span class="badge">🐊 Season 6 - The Lost Jungle</span>
      <h2>The Great River, Lifeline of the Three Clans</h2>
      <p>The Great River has been poisoned by a spreading virus, and the fate of the Shadow Rainforest is now in your hands. Join the epic battle between the Deepwood Clan and the Wetland Clan!</p>
      <a href="#story" class="btn"><i class="fas fa-book-open"></i> Discover the Story</a>
      <a href="#timeline" class="btn btn-secondary"><i class="fas fa-play"></i> Start Now</a>
    `,
    cardHeaders: {
      overview: 'Season 6 Overview',
      story: 'Season 6 Story',
      timeline: 'Season 6 Timeline',
      resources: 'New Resources',
      buildings: 'New Buildings',
      rewards: 'Season 6 Rewards',
      stores: 'Season 6 Stores',
      professions: 'Season 6 Professions',
      map: 'Season 6 Map',
      next: 'What\'s Next?'
    },
    sidebarHeader: 'Season 6 Guide',
    cardBodies: {
      overview: `
        <p><strong style="color: var(--glow-green);">Season 6 - The Lost Jungle</strong> launches in the Lost Jungle.</p>
        <p>The Great River, lifeline of the Great River Clan, has now been <strong>poisoned by a spreading virus</strong>. The jungle is collapsing — creatures are turning into <strong>monsters</strong>, and the balance once protected by the <strong>Great River Clan</strong> is crumbling.</p>
        <p>In this <strong>Season 6 - The Lost Jungle guide</strong>, you'll find all information about the season, how it evolves, new resources, and gameplay strategies.</p>
        <img src="image/image-3.png" alt="Season 6 Main Page">
      `,
      story: `
        <h3>Priestess Rosalia - High Priestess of the Great River</h3>
        <div class="story-section">
          <div class="story-image"><img src="image/image-4.png" alt="Season 6 Story 1"></div>
          <div class="story-image"><img src="image/image-5.png" alt="Season 6 Story 2"></div>
          <div class="story-image"><img src="image/image-6.png" alt="Season 6 Story 3"></div>
        </div>
        <div class="story-section">
          <div class="story-image"><img src="image/image-7.png" alt="Season 6 Story 4"></div>
          <div class="story-image"><img src="image/image-8.png" alt="Season 6 Story 5"></div>
        </div>
        <div class="mail-analysis">
          <div class="mail-box">
            <h4>Priestess Rosalia's Messages Explained</h4>
            <ol>
              <li><strong>Monica</strong> opens the scene saying an important visitor has arrived. This message sets the stage for a key character in the season's story.</li>
              <li><strong>Rosalia</strong> introduces herself indirectly, addressing the Commander and saying she has come to ask for help on behalf of the people of <strong>Shadow Rainforest</strong>. The crisis is larger than a local conflict — she represents an entire nation.</li>
              <li><strong>Blaze</strong> clarifies Rosalia's status: she is his friend, the spiritual leader of <strong>Shadow Rainforest</strong>, and the High Priestess of the <strong>Great River Clan</strong>. This confirms her words carry political and spiritual weight.</li>
              <li><strong>Rosalia</strong> then says the jungle stands on the brink of destruction because two powerful clans are tearing each other apart. Internal conflict has spiraled out of control, threatening the entire region.</li>
              <li>In her final message, Rosalia asks the Commander to accompany her and Blaze into the jungle to <strong>see the future with their own eyes</strong>. She wants the Commander to understand the catastrophe firsthand before deciding.</li>
            </ol>
            <p>Summary: Rosalia appears as a wise leader seeking the Commander's intervention to save the jungle, while Blaze serves as the link confirming her identity and status. These messages set the stage for your entry into Season 6's main conflict.</p>
            <span class="mail-highlight">Key takeaway: The crisis is real, and Rosalia's request is an official invitation for the Commander to intervene before the jungle collapses.</span>
          </div>
        </div>
        <h3>The Mission</h3>
        <p>The <strong>Shadow Rainforest</strong> is ruled by three great clans: the <strong>Great River Clan</strong>, the <strong>Deepwood Clan</strong>, and the <strong>Wetland Clan</strong>.</p>
        <p>At the heart of the jungle flows the <strong>Great River</strong>, the shared lifeline of all three clans. Their leader, the <strong>High Priestess</strong>, can predict the future by reading the river's ripples.</p>
        <p><strong style="color: var(--glow-green);">A true catastrophe</strong> now threatens everything. An unknown virus has struck the river, turning life into monstrous forms and people into <strong>zombies</strong>.</p>
        <p>To prevent this fate, the High Priestess asks her old friend <strong>Blaze</strong> to bring her to the <strong>Commander</strong> — a stranger.</p>
        <p style="font-size: 1.1rem; color: var(--glow-green);">The fate of the Shadow Rainforest now rests in the hands of a stranger!</p>
        <div class="story-section">
          <div class="story-image"><img src="image/image-1.png" alt="Season 6 Email 1"></div>
          <div class="story-image"><img src="image/image-2.png" alt="Season 6 Email 2"></div>
        </div>
        <div class="mail-analysis">
          <div class="mail-box">
            <h4>First Message Explained</h4>
            <p>The message announces that <strong>Season 6: The Lost Jungle</strong> will begin soon, and players will enter a new continent ruled by ancient clans. It explains the historical conflict between <strong>Deepwood Clan</strong> and <strong>Wetland Clan</strong>, while <strong>Great River Clan</strong> maintained the balance.</p>
            <p>It then explains the cause of the crisis: an unknown virus struck the <strong>Great River</strong>, spreading chaos, zombies, and collapsing the balance. The season's system has completely changed, with <strong>8 Warzone regions</strong> divided into <strong>two factions in a 4 vs 4 format</strong>.</p>
            <p>The key point is that the season no longer relies on collective progression toward the center, but on <strong>invading enemy territory and destroying their cities</strong>, competing for ultimate control of the jungle.</p>
            <span class="mail-highlight">Summary: Season 6 is based on direct faction warfare, not traditional centralized competition.</span>
          </div>
          <div class="mail-box">
            <h4>Second Message: Key Pre-Season Points</h4>
            <ol>
              <li><strong>Faction Reveal:</strong> 8 Warzones split into two factions; the map is fully symmetrical for a fair start.</li>
              <li><strong>Faction War:</strong> The battlefield includes everyone; enemy cities are destroyed upon capture; results are irreversible.</li>
              <li><strong>Altar Conquest:</strong> The altar in the Great River zone acts as a powerful support source; controlling it grants crucial alliance skills.</li>
              <li><strong>Ally Cooperation:</strong> Same-faction alliances can make agreements, share communications, and support each other in defense.</li>
              <li><strong>Rainforest Encounters:</strong> Side content includes hunting, donating catches for War Merit, exploring Beneath the Ruins, and instant duels with other players.</li>
            </ol>
            <p>The <strong>important notice</strong> at the end states that <strong>Alliance Exercise</strong> and <strong>Zombie Siege</strong> events will be temporarily paused during Season 6, returning after the season ends.</p>
            <span class="mail-highlight">Summary: Before the season starts, choose your faction, understand war objectives, and leverage side activities to boost your power and points.</span>
          </div>
        </div>
      `,
      timeline: `
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-marker">1</div>
            <div class="timeline-content">
              <h4>Pre-Season - Week 1</h4>
              <ul>
                <li>Season 6 main timeline board</li>
                <li>Season preview</li>
                <li>Season boost (pre-season)</li>
                <li>Faction rewards</li>
                <li>Alliance safe time</li>
              </ul>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-marker">2</div>
            <div class="timeline-content">
              <h4>Pre-Season - Week 2</h4>
              <p>The only additional event available in Week 2:</p>
              <ul><li>Capitol Conquest</li></ul>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-marker">3</div>
            <div class="timeline-content">
              <h4>Season 6 Launch</h4>
              <p>Season 6 begins with pre-season events. You'll see a new icon under Duel VS with a 14-day countdown.</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-marker">4</div>
            <div class="timeline-content">
              <h4>New Resources</h4>
              <ul>
                <li><strong>Spore:</strong> For building and upgrading the Fungal Institute</li>
                <li><strong>Rainforest Mushroom:</strong> For building Spore Factories</li>
                <li><strong>War Merit:</strong> For purchasing from the War Merit Store</li>
              </ul>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-marker">5</div>
            <div class="timeline-content">
              <h4>New Buildings</h4>
              <ul>
                <li>Fungal Institute</li>
                <li>Spore Factory</li>
                <li>Guardian Field</li>
                <li>War Merit Store</li>
              </ul>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-marker">6</div>
            <div class="timeline-content">
              <h4>Professions</h4>
              <p>Maximum profession level: <strong style="color: var(--glow-green);">Level 100</strong></p>
              <p>Diplomat profession is <strong>not available</strong> in Season 6.</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-marker">7</div>
            <div class="timeline-content">
              <h4>Season 6 Boost</h4>
              <p>Base skin with boosts: <strong style="color: var(--glow-green);">Enchanted Mushroom</strong></p>
              <p>SSR hero receiving UR upgrade: <strong style="color: var(--glow-green);">Blaze!</strong></p>
            </div>
          </div>
        </div>
        <div class="map-container">
          <h3>📅 Official Season 6 Event Schedule</h3>
          <img src="image/S6-schedule-1024x796.jpg" alt="Season 6 Event Schedule">
          <p style="margin-top: 15px;"><a href="image/S6-schedule-hq-scaled.jpg" target="_blank">Download high-quality schedule</a></p>
        </div>
        <div class="schedule-analysis">
          <div class="schedule-analysis-intro">
            <h3>Schedule Breakdown</h3>
            <p>The schedule image shows each event name, its main objective, then columns from <strong>Wk1</strong> to <strong>Wk8</strong> showing when it appears. Highlighted cells mean the event is active that week, with some rows showing specific days like Tuesday, Saturday, or Sunday.</p>
          </div>
          <div class="schedule-grid">
            <div class="schedule-item"><h4>Purge Action</h4><p>Early event for killing world map zombies, collecting first-kill rewards, and climbing the leaderboard.</p><span class="schedule-meta">Timing: Start of season, Weeks 1 & 2</span></div>
            <div class="schedule-item"><h4>Fishing Ground</h4><p>Early battle for fishing zones. Once you capture a fishing zone, you can start collecting its rewards.</p><span class="schedule-meta">Timing: Early window in Weeks 1 & 2</span></div>
            <div class="schedule-item"><h4>Rainforest's Wrath</h4><p>Fight Doom Elite to earn Rage points and activate Devouring Flower, with rewards for supporting participating allies.</p><span class="schedule-meta">Timing: Appears early in Week 1</span></div>
            <div class="schedule-item"><h4>Fishing Tournament</h4><p>Ongoing ranking competition to improve individual performance and earn fishing rewards, encouraging cooperation within the alliance.</p><span class="schedule-meta">Timing: Spans most season weeks</span></div>
            <div class="schedule-item"><h4>City Clash S6</h4><p>Capturing cities grants influence points that help your alliance rise in seasonal rankings and earn better rewards.</p><span class="schedule-meta">Timing: Specific early rounds at the start</span></div>
            <div class="schedule-item"><h4>Merit Store</h4><p>A semi-permanent store to spend Merit on various rewards, refreshing weekly.</p><span class="schedule-meta">Timing: Available throughout the season with weekly refresh</span></div>
            <div class="schedule-item"><h4>Beneath the Ruins</h4><p>Challenge of descending through consecutive stages to reach the final stage and earn seasonal resources and exclusive rewards.</p><span class="schedule-meta">Timing: Starts after season launch, lasts several weeks</span></div>
            <div class="schedule-item"><h4>Hero Awakening</h4><p>When requirements are met, upgrade the hero to Celebrity Star and unlock a stronger Awakening skill replacing the fourth skill.</p><span class="schedule-meta">Timing: Multiple windows throughout the season</span></div>
            <div class="schedule-item"><h4>Sanctuary Opening</h4><p>Initial opening of the Sanctuary for direct faction competition.</p><span class="schedule-meta">Timing: Sunday of Week 2</span></div>
            <div class="schedule-item"><h4>Sanctuary Conquest</h4><p>Enemy faction sanctuaries open for competition — one of the most important mid-season turning points.</p><span class="schedule-meta">Timing: Saturdays of Weeks 5, 6 & 7</span></div>
            <div class="schedule-item"><h4>Hero Promotion</h4><p>During this event, you can promote SSR hero Blaze to 5 stars then push to UR rank.</p><span class="schedule-meta">Timing: Recurring across most season weeks</span></div>
            <div class="schedule-item"><h4>Faction Clash</h4><p>Factions form alliances, build defensive support, and push toward shared goals to continuously increase Influence points.</p><span class="schedule-meta">Timing: Present broadly throughout the season</span></div>
            <div class="schedule-item"><h4>Altar Conquest</h4><p>Capturing the altar grants powerful Buffs; it recurs weekly on a fixed day.</p><span class="schedule-meta">Timing: Every Tuesday starting Week 3</span></div>
            <div class="schedule-item"><h4>Trade Post</h4><p>Trade Posts from Level 1 to 4 open every two weeks, with post governors chosen by War Merit ranking within the region.</p><span class="schedule-meta">Timing: Bi-weekly cycle</span></div>
            <div class="schedule-item"><h4>Outpost Conquests</h4><p>Offensive and defensive battles around repaired Outposts. Protect your alliance's position and destroy the enemy's before they attack.</p><span class="schedule-meta">Timing: Concentrated in the second half of the season</span></div>
            <div class="schedule-item"><h4>Faction Duel</h4><p>The grand final battle between factions as the season nears its end — the decisive moment for Shadow Rainforest's fate.</p><span class="schedule-meta">Timing: Week 8 near season end</span></div>
            <div class="schedule-item"><h4>Season Conclusion</h4><p>Final rewards distributed based on Alliance Influence points ranking after all competitions end.</p><span class="schedule-meta">Timing: End of Week 8</span></div>
          </div>
        </div>
      `,
      resources: `
        <div class="resources-section">
          <div class="resource-card">
            <img src="image/spore.png" alt="Spore" class="resource-icon">
            <h4 class="resource-title">Spore</h4>
            <p>Used to build and upgrade the Fungal Institute to increase virus resistance</p>
            <ul style="text-align: right; margin-top: 15px; font-size: 0.9rem;">
              <li>Doom Elite kill rewards</li>
              <li>Seasonal research missions</li>
              <li>Season 6 objectives</li>
              <li>Spore Factory</li>
            </ul>
          </div>
          <div class="resource-card">
            <img src="image/rainforest-mushroom.png" alt="Rainforest Mushroom" class="resource-icon">
            <h4 class="resource-title">Rainforest Mushroom</h4>
            <p>Used to build and upgrade Spore Factories</p>
            <ul style="text-align: right; margin-top: 15px; font-size: 0.9rem;">
              <li>Zombie kill rewards</li>
              <li>Weekly pass</li>
              <li>War Merit Store</li>
              <li>Visitors</li>
            </ul>
          </div>
          <div class="resource-card">
            <img src="image/war-merit.png" alt="War Merit" class="resource-icon">
            <h4 class="resource-title">War Merit</h4>
            <p>Rare resource for purchasing from the War Merit Store</p>
            <ul style="text-align: right; margin-top: 15px; font-size: 0.9rem;">
              <li>Zombie kill rewards</li>
              <li>Doom Elite kill rewards</li>
              <li>Alliance cities</li>
            </ul>
          </div>
        </div>
      `,
      buildings: `
        <div class="buildings-section">
          <div class="building-card">
            <div class="building-header"><h4>🏛️ Fungal Institute</h4></div>
            <div class="building-body">
              <p>Allows you to boost your virus resistance to defeat zombies and stronghold guardians.</p>
              <p><strong>Max Level:</strong> Level 60</p>
              <p><strong>Requirements:</strong> Spore</p>
            </div>
          </div>
          <div class="building-card">
            <div class="building-header"><h4>🏭 Spore Factory</h4></div>
            <div class="building-body">
              <p>Produces Spore continuously.</p>
              <p><strong>Max Level:</strong> Level 30</p>
              <p><strong>Requirements:</strong> Rainforest Mushroom</p>
              <p><strong>Note:</strong> Multiple factories available!</p>
            </div>
          </div>
          <div class="building-card">
            <div class="building-header"><h4>🛡️ Guardian Field</h4></div>
            <div class="building-body">
              <p>Seasonal building providing special Season 6 boosts.</p>
              <p>Additional details will be available when the season starts.</p>
            </div>
          </div>
          <div class="building-card">
            <div class="building-header"><h4>🛒 War Merit Store</h4></div>
            <div class="building-body">
              <p>Store for purchasing items using War Merit.</p>
              <p>Rainforest Mushroom can be purchased from this store.</p>
            </div>
          </div>
        </div>
      `,
      rewards: `
        <p>Season rewards return to the previous format, with alliance and faction rewards.</p>
        <div class="rewards-section">
          <div class="rewards-grid">
            <div class="reward-item">
              <img src="image/image-28.png" alt="Ancestral Castle" class="reward-image">
              <h4>Ancestral Castle</h4>
            </div>
            <div class="reward-item">
              <img src="image/image-29.png" alt="Awakening Shard" class="reward-image">
              <h4>Awakening Shard</h4>
            </div>
            <div class="reward-item">
              <img src="image/image-26.png" alt="Alliance Rewards" class="reward-image">
              <h4>Alliance Rewards</h4>
            </div>
            <div class="reward-item">
              <img src="image/image-27.png" alt="Additional Rewards" class="reward-image">
              <h4>Additional Rewards</h4>
            </div>
          </div>
        </div>
      `,
      stores: `
        <div class="stores-section">
          <div class="store-tabs">
            <div class="store-tab active" data-tab="honor-store">Honor Store</div>
            <div class="store-tab" data-tab="season-store">Season Store</div>
            <div class="store-tab" data-tab="cosmetics-store">Cosmetics Store</div>
          </div>
          <div class="store-content active" id="honor-store">
            <div class="store-items">
              <div class="store-item"><img src="image/image-30.png" alt="Honor Store Item" class="reward-image"><h4>Various Items</h4></div>
              <div class="store-item"><img src="image/image-31.png" alt="Honor Store Item" class="reward-image"><h4>Various Items</h4></div>
            </div>
          </div>
          <div class="store-content" id="season-store">
            <div class="store-items">
              <div class="store-item"><img src="image/image-176.png" alt="Dominion Sanctuary" class="reward-image"><h4>Dominion Sanctuary</h4></div>
              <div class="store-item"><img src="image/image-177.png" alt="Doomsday Castle" class="reward-image"><h4>Doomsday Castle</h4></div>
              <div class="store-item"><img src="image/image-192.png" alt="Ice Palace" class="reward-image"><h4>Ice Palace</h4></div>
              <div class="store-item"><img src="image/image-94.png" alt="Sun Temple" class="reward-image"><h4>Sun Temple</h4></div>
              <div class="store-item"><img src="image/image-95.png" alt="Tenro Palace" class="reward-image"><h4>Tenro Palace</h4></div>
              <div class="store-item"><img src="image/image-140.png" alt="New Skin" class="reward-image"><h4>New Skin</h4></div>
            </div>
          </div>
          <div class="store-content" id="cosmetics-store">
            <div class="store-items">
              <div class="store-item">
                <img src="image/image-141.png" alt="Enchanted Mushroom" class="reward-image">
                <h4>Enchanted Mushroom</h4>
                <p style="font-size: 0.9rem; color: var(--text-color);">Season 6 base skin</p>
              </div>
            </div>
          </div>
        </div>
      `,
      professions: `
        <p>In Season 6, the maximum profession level is <strong style="color: var(--glow-green);">Level 100</strong>.</p>
        <p>The <strong style="color: #ff6b6b;">Diplomat profession is not available</strong> in Season 6.</p>
        <h3>Available Professions</h3>
        <ul>
          <li><strong>Engineer:</strong> Building and upgrading structures</li>
          <li><strong>Warlord:</strong> Military enhancements</li>
          <li><strong>Explorer:</strong> Exploration and resource gathering</li>
          <li><strong>Trader:</strong> Trade and extra resources</li>
        </ul>
        <a href="#" class="btn" style="margin-top: 20px;"><i class="fas fa-info-circle"></i> Profession Details</a>
      `,
      map: `
        <p>The Season 6 map is the same size as Season 5, approximately equal to <strong>9 S0 maps</strong> (Season 0).</p>
        <p>The column on the right side of the image is the <strong>map legend</strong>, showing each landmark's name and icon so you can quickly identify it on the map.</p>
        <div class="map-container">
          <img src="image/official-map.png" alt="Official Season 6 Map">
          <p style="margin-top: 15px;"><a href="image/official-map-hq-scaled.png" target="_blank">Download high-quality map</a></p>
        </div>
        <div class="map-legend">
          <div class="map-legend-item"><h4>Trade Post</h4><p>Legend icon: <strong>White circular icon resembling a platform or small basin</strong> inside a purple square. This is the Trade Post linked to trade and seasonal gains.</p></div>
          <div class="map-legend-item"><h4>Outpost</h4><p>Legend icon: <strong>White stone building or statue</strong> inside an orange square. Represents the forward military point crucial for control and expansion.</p></div>
          <div class="map-legend-item"><h4>Game Console</h4><p>Legend icon: <strong>Small white device resembling an arcade machine or standing screen</strong> inside a pink square. This landmark is linked to a special seasonal activity.</p></div>
          <div class="map-legend-item"><h4>Sanctuary</h4><p>Legend icon: <strong>Glowing golden emblem resembling a flame or crown</strong> inside a red square. The Sanctuary is one of the most important points of faction competition.</p></div>
          <div class="map-legend-item"><h4>Altar</h4><p>Legend icon: <strong>White tiered building resembling a temple or stone staircase</strong> inside a yellow square with a small orange bar beneath. The Altar grants powerful Buffs and is a key strategic target.</p></div>
          <div class="map-legend-item"><h4>Ancestral Temple</h4><p>Legend icon: <strong>Shining golden emblem resembling a sacred artifact or ancient seal</strong> inside a dark red square. A rare, high-value landmark on the map.</p></div>
        </div>
      `,
      next: `
        <p>Now that you've explored the Season 6 overview, it's time to prepare for the next step:</p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-top: 20px;">
          <div style="background: rgba(0, 255, 136, 0.1); padding: 20px; border-radius: 12px; border: 1px solid rgba(0, 255, 136, 0.2);">
            <h4 style="color: var(--glow-green); margin-bottom: 10px;"><i class="fas fa-hourglass-start"></i> Pre-Season</h4>
            <p>Learn about pre-season events and faction rewards</p>
            <a href="#timeline" class="btn" style="margin-top: 10px; padding: 10px 20px; font-size: 0.9rem;">Start Now</a>
          </div>
          <div style="background: rgba(0, 255, 136, 0.1); padding: 20px; border-radius: 12px; border: 1px solid rgba(0, 255, 136, 0.2);">
            <h4 style="color: var(--glow-green); margin-bottom: 10px;"><i class="fas fa-chess"></i> Starting Strategy</h4>
            <p>Best strategy for the first days of the season</p>
            <a href="#timeline" class="btn" style="margin-top: 10px; padding: 10px 20px; font-size: 0.9rem;">Learn Now</a>
          </div>
          <div style="background: rgba(0, 255, 136, 0.1); padding: 20px; border-radius: 12px; border: 1px solid rgba(0, 255, 136, 0.2);">
            <h4 style="color: var(--glow-green); margin-bottom: 10px;"><i class="fas fa-calendar-week"></i> First Week</h4>
            <p>Details of first week events</p>
            <a href="#timeline" class="btn" style="margin-top: 10px; padding: 10px 20px; font-size: 0.9rem;">Explore</a>
          </div>
        </div>
      `
    },
    sidebarBody: `
      <img src="image/season-6-main-banner.png" alt="Season 6" style="width: 100%; border-radius: 12px; margin-bottom: 15px;">
      <span class="badge" style="display: block; text-align: center; margin-bottom: 20px;">6 guides available</span>
      <h4 style="color: var(--glow-green); margin-bottom: 15px;">Main Guides</h4>
      <ul class="guide-list">
        <li><a href="#overview"><i class="fas fa-chevron-right"></i> Overview</a></li>
        <li><a href="#story"><i class="fas fa-chevron-right"></i> Story</a></li>
        <li><a href="#timeline"><i class="fas fa-chevron-right"></i> Event Schedule</a></li>
        <li><a href="#resources"><i class="fas fa-chevron-right"></i> Resources</a></li>
        <li><a href="#buildings"><i class="fas fa-chevron-right"></i> Buildings</a></li>
        <li><a href="#stores"><i class="fas fa-chevron-right"></i> Stores</a></li>
        <li><a href="#rewards"><i class="fas fa-chevron-right"></i> Rewards</a></li>
      </ul>
      <h4 style="color: var(--glow-green); margin: 20px 0 15px;">Quick Links</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 10px;">
        <a href="#professions" class="btn" style="padding: 8px 15px; font-size: 0.85rem;"><i class="fas fa-user-cog"></i> Professions</a>
        <a href="#map" class="btn" style="padding: 8px 15px; font-size: 0.85rem;"><i class="fas fa-map"></i> Map</a>
      </div>
    `,
    footerSections: [
      `<h3>🌴 Last War Tutorial</h3>
       <p>Your unofficial comprehensive guide for Last War: Survival Game.</p>
       <p>Complete guides, tips, and strategies covering all seasons.</p>`,
      `<h3>Quick Links</h3>
       <ul>
         <li><a href="#overview"><i class="fas fa-angle-right"></i> Overview</a></li>
         <li><a href="#timeline"><i class="fas fa-angle-right"></i> Event Schedule</a></li>
         <li><a href="#stores"><i class="fas fa-angle-right"></i> Stores</a></li>
         <li><a href="#rewards"><i class="fas fa-angle-right"></i> Rewards</a></li>
       </ul>`,
      `<h3>Contact Us</h3>
       <ul>
         <li><a href="#"><i class="fab fa-discord"></i> Discord</a></li>
         <li><a href="#"><i class="fab fa-facebook"></i> Facebook</a></li>
         <li><a href="#"><i class="fab fa-twitter"></i> Twitter</a></li>
         <li><a href="#"><i class="fab fa-youtube"></i> YouTube</a></li>
       </ul>`
    ],
    copyright: `
      <p>&copy; 2026 — Last War Tutorial. All original content on this site is protected.</p>
      <p>Last War Tutorial is an independent, unofficial website.</p>
      <p>Website developer General-c4</p>
    `
  };

  // ===== CHINESE TRANSLATIONS =====
  const zh = {
    dir: 'ltr',
    pageTitle: '🐊 第六赛季 - 失落丛林',
    siteSubtitle: 'Last War 完整攻略指南',
    nav: [
      '<i class="fas fa-eye"></i> 概览',
      '<i class="fas fa-user-cog"></i> 职业',
      '<i class="fas fa-calendar-alt"></i> 时间线',
      '<i class="fas fa-store"></i> 商店',
      '<i class="fas fa-trophy"></i> 奖励',
      '<i class="fas fa-arrow-right"></i> 下一步？'
    ],
    heroContent: `
      <span class="badge">🐊 第六赛季 - 失落丛林</span>
      <h2>大河，三大氏族的生命线</h2>
      <p>大河被蔓延的病毒污染，暗影雨林的命运现在掌握在你手中。加入深林氏族与湿地氏族之间的史诗之战！</p>
      <a href="#story" class="btn"><i class="fas fa-book-open"></i> 探索故事</a>
      <a href="#timeline" class="btn btn-secondary"><i class="fas fa-play"></i> 立即开始</a>
    `,
    cardHeaders: {
      overview: '第六赛季概览',
      story: '第六赛季故事',
      timeline: '第六赛季时间线',
      resources: '新资源',
      buildings: '新建筑',
      rewards: '第六赛季奖励',
      stores: '第六赛季商店',
      professions: '第六赛季职业',
      map: '第六赛季地图',
      next: '下一步？'
    },
    sidebarHeader: '第六赛季指南',
    cardBodies: {
      overview: `
        <p><strong style="color: var(--glow-green);">第六赛季 - 失落丛林</strong>在失落丛林中展开。</p>
        <p>大河——大河氏族的生命线——现已<strong>被蔓延的病毒污染</strong>。丛林正在崩溃——生物变成了<strong>怪物</strong>，曾由<strong>大河氏族</strong>守护的平衡正在瓦解。</p>
        <p>在这份<strong>第六赛季 - 失落丛林指南</strong>中，你将找到关于赛季的所有信息、发展历程、新资源和玩法策略。</p>
        <img src="image/image-3.png" alt="第六赛季主页">
      `,
      story: `
        <h3>女祭司罗莎莉亚 - 大河的高级女祭司</h3>
        <div class="story-section">
          <div class="story-image"><img src="image/image-4.png" alt="第六赛季故事 1"></div>
          <div class="story-image"><img src="image/image-5.png" alt="第六赛季故事 2"></div>
          <div class="story-image"><img src="image/image-6.png" alt="第六赛季故事 3"></div>
        </div>
        <div class="story-section">
          <div class="story-image"><img src="image/image-7.png" alt="第六赛季故事 4"></div>
          <div class="story-image"><img src="image/image-8.png" alt="第六赛季故事 5"></div>
        </div>
        <div class="mail-analysis">
          <div class="mail-box">
            <h4>女祭司罗莎莉亚的信息解读</h4>
            <ol>
              <li><strong>莫妮卡</strong>开场说有一位重要的访客到来。这条消息为赛季故事中的关键角色登场做了铺垫。</li>
              <li><strong>罗莎莉亚</strong>间接自我介绍，对指挥官说她代表<strong>暗影雨林</strong>的人民前来寻求帮助。这场危机已超出地方冲突——她代表的是整个民族。</li>
              <li><strong>布雷兹</strong>阐明了罗莎莉亚的身份：她是他的朋友、<strong>暗影雨林</strong>的精神领袖，也是<strong>大河氏族</strong>的高级女祭司。这确认了她的话语具有政治和精神上的分量。</li>
              <li><strong>罗莎莉亚</strong>接着说，丛林正处于毁灭的边缘，因为两个强大的氏族正在互相撕裂。内部冲突已经失控，威胁到整个地区。</li>
              <li>在最后的信息中，罗莎莉亚请求指挥官与她和布雷兹一起深入丛林，<strong>亲眼见证未来</strong>。她希望指挥官在做出决定之前亲身了解灾难的规模。</li>
            </ol>
            <p>总结：罗莎莉亚以一位睿智领袖的形象出现，寻求指挥官的干预来拯救丛林，而布雷兹则是确认她身份和地位的纽带。这些信息为你进入第六赛季的主要冲突奠定了基础。</p>
            <span class="mail-highlight">核心要点：危机是真实的，罗莎莉亚的请求是对指挥官的正式邀请，要求在丛林彻底崩溃之前进行干预。</span>
          </div>
        </div>
        <h3>任务</h3>
        <p><strong>暗影雨林</strong>由三大氏族统治：<strong>大河氏族</strong>、<strong>深林氏族</strong>和<strong>湿地氏族</strong>。</p>
        <p>在丛林的中心流淌着<strong>大河</strong>——三大氏族共同的生命线。他们的领袖<strong>高级女祭司</strong>可以通过解读河流的波纹预见未来。</p>
        <p><strong style="color: var(--glow-green);">一场真正的灾难</strong>现在威胁着一切。一种未知病毒侵袭了河流，将生命变成怪物，将人类变成<strong>丧尸</strong>。</p>
        <p>为了阻止这一命运，高级女祭司请求她的老友<strong>布雷兹</strong>将她带到<strong>指挥官</strong>面前——一个陌生人。</p>
        <p style="font-size: 1.1rem; color: var(--glow-green);">暗影雨林的命运现在掌握在一个陌生人手中！</p>
        <div class="story-section">
          <div class="story-image"><img src="image/image-1.png" alt="第六赛季邮件 1"></div>
          <div class="story-image"><img src="image/image-2.png" alt="第六赛季邮件 2"></div>
        </div>
        <div class="mail-analysis">
          <div class="mail-box">
            <h4>第一封信息解读</h4>
            <p>信息宣布<strong>第六赛季：失落丛林</strong>即将开始，玩家将进入一个由古老氏族统治的新大陆。它解释了<strong>深林氏族</strong>与<strong>湿地氏族</strong>之间的历史冲突，而<strong>大河氏族</strong>维持着平衡。</p>
            <p>然后解释了危机的原因：一种未知病毒袭击了<strong>大河</strong>，导致混乱、丧尸蔓延和平衡崩溃。赛季系统已完全改变，<strong>8个战区</strong>分为<strong>两个阵营，4对4形式</strong>。</p>
            <p>关键要点是赛季不再依赖于向中心集体推进，而是<strong>入侵敌方领土和摧毁他们的城市</strong>，争夺对丛林的最终控制权。</p>
            <span class="mail-highlight">总结：第六赛季基于直接的阵营战争，而非传统的集中式竞争。</span>
          </div>
          <div class="mail-box">
            <h4>第二封信息：赛季前要点</h4>
            <ol>
              <li><strong>阵营揭示：</strong>8个战区分为两个阵营；地图完全对称以确保公平起步。</li>
              <li><strong>阵营战争：</strong>战场包括所有人；敌方城市被占领后即被摧毁；结果不可逆转。</li>
              <li><strong>祭坛争夺：</strong>大河区域的祭坛作为强大的支援来源；控制它可获得关键的联盟技能。</li>
              <li><strong>盟友合作：</strong>同阵营联盟可以达成协议、共享通信、在防御中互相支援。</li>
              <li><strong>雨林遭遇：</strong>除阵营战争外的副线内容包括狩猎、捐献猎物换取战功、探索废墟之下以及与其他玩家即时对决。</li>
            </ol>
            <p>最后的<strong>重要通知</strong>表示<strong>联盟演习</strong>和<strong>丧尸围城</strong>活动将在第六赛季期间暂停，赛季结束后恢复。</p>
            <span class="mail-highlight">总结：赛季开始前，选择你的阵营，理解战争目标，利用副线活动提升实力和积分。</span>
          </div>
        </div>
      `,
      timeline: `
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-marker">1</div>
            <div class="timeline-content">
              <h4>赛季前 - 第1周</h4>
              <ul>
                <li>第六赛季主时间线面板</li>
                <li>赛季预览</li>
                <li>赛季增强（赛季前）</li>
                <li>阵营奖励</li>
                <li>联盟安全时间</li>
              </ul>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-marker">2</div>
            <div class="timeline-content">
              <h4>赛季前 - 第2周</h4>
              <p>第2周唯一可用的额外活动：</p>
              <ul><li>国会大厦征服</li></ul>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-marker">3</div>
            <div class="timeline-content">
              <h4>第六赛季开启</h4>
              <p>第六赛季以赛季前活动开始，你将在Duel VS下看到一个新图标，并有14天倒计时。</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-marker">4</div>
            <div class="timeline-content">
              <h4>新资源</h4>
              <ul>
                <li><strong>孢子：</strong>用于建造和升级真菌研究所</li>
                <li><strong>雨林蘑菇：</strong>用于建造孢子工厂</li>
                <li><strong>战功：</strong>用于在战功商店购买物品</li>
              </ul>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-marker">5</div>
            <div class="timeline-content">
              <h4>新建筑</h4>
              <ul>
                <li>真菌研究所</li>
                <li>孢子工厂</li>
                <li>守护者之地</li>
                <li>战功商店</li>
              </ul>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-marker">6</div>
            <div class="timeline-content">
              <h4>职业</h4>
              <p>职业最高等级：<strong style="color: var(--glow-green);">100级</strong></p>
              <p>外交官职业在第六赛季<strong>不可用</strong>。</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-marker">7</div>
            <div class="timeline-content">
              <h4>第六赛季增强</h4>
              <p>基础皮肤及增益：<strong style="color: var(--glow-green);">魔法蘑菇</strong></p>
              <p>将获得UR升级的SSR英雄：<strong style="color: var(--glow-green);">布雷兹！</strong></p>
            </div>
          </div>
        </div>
        <div class="map-container">
          <h3>📅 第六赛季官方活动日程表</h3>
          <img src="image/S6-schedule-1024x796.jpg" alt="第六赛季活动日程表">
          <p style="margin-top: 15px;"><a href="image/S6-schedule-hq-scaled.jpg" target="_blank">下载高清日程表</a></p>
        </div>
        <div class="schedule-analysis">
          <div class="schedule-analysis-intro">
            <h3>日程表详解</h3>
            <p>日程图展示了每个活动的名称和主要目标，然后从<strong>第1周</strong>到<strong>第8周</strong>的列显示活动出现时间。高亮单元格表示活动在该周活跃，部分行标注了特定日期如周二、周六或周日。</p>
          </div>
          <div class="schedule-grid">
            <div class="schedule-item"><h4>净化行动</h4><p>早期活动，击杀世界地图丧尸，收集首杀奖励，攀登排行榜。</p><span class="schedule-meta">时间：赛季开始，第1-2周</span></div>
            <div class="schedule-item"><h4>渔场争夺</h4><p>早期渔场争夺战。占领渔场后即可开始收集奖励。</p><span class="schedule-meta">时间：第1-2周早期窗口</span></div>
            <div class="schedule-item"><h4>雨林之怒</h4><p>对战末日精英获取怒气点并激活吞噬之花，支援参战盟友可获得奖励。</p><span class="schedule-meta">时间：第1周早期出现</span></div>
            <div class="schedule-item"><h4>钓鱼锦标赛</h4><p>持续的排名竞赛，提升个人表现并获得钓鱼奖励，鼓励联盟内合作。</p><span class="schedule-meta">时间：贯穿赛季大部分周数</span></div>
            <div class="schedule-item"><h4>城市冲突 S6</h4><p>占领城市获得影响力点数，帮助联盟提升赛季排名并获得更好奖励。</p><span class="schedule-meta">时间：赛季初期特定轮次</span></div>
            <div class="schedule-item"><h4>战功商店</h4><p>半永久性商店，可用战功兑换各种奖励，每周刷新。</p><span class="schedule-meta">时间：赛季全程可用，每周更新</span></div>
            <div class="schedule-item"><h4>废墟之下</h4><p>逐层下降挑战，到达最终层获取赛季资源和专属奖励。</p><span class="schedule-meta">时间：赛季开始后持续数周</span></div>
            <div class="schedule-item"><h4>英雄觉醒</h4><p>满足条件后可将英雄升级为明星等级，解锁更强的觉醒技能替代第四技能。</p><span class="schedule-meta">时间：赛季内多个时间窗口</span></div>
            <div class="schedule-item"><h4>圣殿开启</h4><p>圣殿初次开放，供阵营间直接竞争。</p><span class="schedule-meta">时间：第2周周日</span></div>
            <div class="schedule-item"><h4>圣殿征服</h4><p>敌方阵营圣殿开放争夺——赛季中期最重要的转折点之一。</p><span class="schedule-meta">时间：第5、6、7周的周六</span></div>
            <div class="schedule-item"><h4>英雄晋升</h4><p>此活动期间可将SSR英雄布雷兹升至5星，然后推进到UR等级。</p><span class="schedule-meta">时间：贯穿赛季大部分周数</span></div>
            <div class="schedule-item"><h4>阵营冲突</h4><p>阵营结成联盟，建立防御支援，朝共同目标推进以持续增加影响力点数。</p><span class="schedule-meta">时间：赛季全程广泛存在</span></div>
            <div class="schedule-item"><h4>祭坛争夺</h4><p>占领祭坛获得强力增益效果；每周固定日期重复。</p><span class="schedule-meta">时间：从第3周起每周二</span></div>
            <div class="schedule-item"><h4>贸易站</h4><p>1-4级贸易站每两周开放一次，贸易站管理者按区域内战功排名选出。</p><span class="schedule-meta">时间：双周循环</span></div>
            <div class="schedule-item"><h4>前哨征服</h4><p>围绕修复的前哨进行攻防战。保护联盟阵地，在敌人发动攻击前摧毁对方。</p><span class="schedule-meta">时间：集中在赛季后半段</span></div>
            <div class="schedule-item"><h4>阵营决斗</h4><p>赛季末尾阵营间的终极大战——决定暗影雨林命运的时刻。</p><span class="schedule-meta">时间：第8周赛季末尾</span></div>
            <div class="schedule-item"><h4>赛季结算</h4><p>所有竞赛结束后，根据联盟影响力积分排名分发最终奖励。</p><span class="schedule-meta">时间：第8周结束</span></div>
          </div>
        </div>
      `,
      resources: `
        <div class="resources-section">
          <div class="resource-card">
            <img src="image/spore.png" alt="孢子" class="resource-icon">
            <h4 class="resource-title">孢子</h4>
            <p>用于建造和升级真菌研究所以提高病毒抵抗力</p>
            <ul style="text-align: right; margin-top: 15px; font-size: 0.9rem;">
              <li>末日精英击杀奖励</li>
              <li>赛季研究任务</li>
              <li>第六赛季目标</li>
              <li>孢子工厂</li>
            </ul>
          </div>
          <div class="resource-card">
            <img src="image/rainforest-mushroom.png" alt="雨林蘑菇" class="resource-icon">
            <h4 class="resource-title">雨林蘑菇</h4>
            <p>用于建造和升级孢子工厂</p>
            <ul style="text-align: right; margin-top: 15px; font-size: 0.9rem;">
              <li>丧尸击杀奖励</li>
              <li>每周通行证</li>
              <li>战功商店</li>
              <li>访客</li>
            </ul>
          </div>
          <div class="resource-card">
            <img src="image/war-merit.png" alt="战功" class="resource-icon">
            <h4 class="resource-title">战功</h4>
            <p>用于在战功商店购买物品的稀有资源</p>
            <ul style="text-align: right; margin-top: 15px; font-size: 0.9rem;">
              <li>丧尸击杀奖励</li>
              <li>末日精英击杀奖励</li>
              <li>联盟城市</li>
            </ul>
          </div>
        </div>
      `,
      buildings: `
        <div class="buildings-section">
          <div class="building-card">
            <div class="building-header"><h4>🏛️ 真菌研究所</h4></div>
            <div class="building-body">
              <p>提升病毒抵抗力，击败丧尸和据点守卫。</p>
              <p><strong>最高等级：</strong>60级</p>
              <p><strong>需求：</strong>孢子</p>
            </div>
          </div>
          <div class="building-card">
            <div class="building-header"><h4>🏭 孢子工厂</h4></div>
            <div class="building-body">
              <p>持续生产孢子。</p>
              <p><strong>最高等级：</strong>30级</p>
              <p><strong>需求：</strong>雨林蘑菇</p>
              <p><strong>注意：</strong>可建造多个工厂！</p>
            </div>
          </div>
          <div class="building-card">
            <div class="building-header"><h4>🛡️ 守护者之地</h4></div>
            <div class="building-body">
              <p>赛季建筑，提供第六赛季特殊增益。</p>
              <p>赛季开始后将提供更多详情。</p>
            </div>
          </div>
          <div class="building-card">
            <div class="building-header"><h4>🛒 战功商店</h4></div>
            <div class="building-body">
              <p>使用战功购买物品的商店。</p>
              <p>可在此商店购买雨林蘑菇。</p>
            </div>
          </div>
        </div>
      `,
      rewards: `
        <p>赛季奖励恢复为之前的模式，包含联盟和阵营奖励。</p>
        <div class="rewards-section">
          <div class="rewards-grid">
            <div class="reward-item">
              <img src="image/image-28.png" alt="祖先城堡" class="reward-image">
              <h4>祖先城堡</h4>
            </div>
            <div class="reward-item">
              <img src="image/image-29.png" alt="觉醒碎片" class="reward-image">
              <h4>觉醒碎片</h4>
            </div>
            <div class="reward-item">
              <img src="image/image-26.png" alt="联盟奖励" class="reward-image">
              <h4>联盟奖励</h4>
            </div>
            <div class="reward-item">
              <img src="image/image-27.png" alt="额外奖励" class="reward-image">
              <h4>额外奖励</h4>
            </div>
          </div>
        </div>
      `,
      stores: `
        <div class="stores-section">
          <div class="store-tabs">
            <div class="store-tab active" data-tab="honor-store">荣誉商店</div>
            <div class="store-tab" data-tab="season-store">赛季商店</div>
            <div class="store-tab" data-tab="cosmetics-store">装饰商店</div>
          </div>
          <div class="store-content active" id="honor-store">
            <div class="store-items">
              <div class="store-item"><img src="image/image-30.png" alt="荣誉商店物品" class="reward-image"><h4>各类物品</h4></div>
              <div class="store-item"><img src="image/image-31.png" alt="荣誉商店物品" class="reward-image"><h4>各类物品</h4></div>
            </div>
          </div>
          <div class="store-content" id="season-store">
            <div class="store-items">
              <div class="store-item"><img src="image/image-176.png" alt="统治圣殿" class="reward-image"><h4>统治圣殿</h4></div>
              <div class="store-item"><img src="image/image-177.png" alt="末日城堡" class="reward-image"><h4>末日城堡</h4></div>
              <div class="store-item"><img src="image/image-192.png" alt="冰霜宫殿" class="reward-image"><h4>冰霜宫殿</h4></div>
              <div class="store-item"><img src="image/image-94.png" alt="太阳神殿" class="reward-image"><h4>太阳神殿</h4></div>
              <div class="store-item"><img src="image/image-95.png" alt="天狼宫" class="reward-image"><h4>天狼宫</h4></div>
              <div class="store-item"><img src="image/image-140.png" alt="新皮肤" class="reward-image"><h4>新皮肤</h4></div>
            </div>
          </div>
          <div class="store-content" id="cosmetics-store">
            <div class="store-items">
              <div class="store-item">
                <img src="image/image-141.png" alt="魔法蘑菇" class="reward-image">
                <h4>魔法蘑菇</h4>
                <p style="font-size: 0.9rem; color: var(--text-color);">第六赛季基础皮肤</p>
              </div>
            </div>
          </div>
        </div>
      `,
      professions: `
        <p>第六赛季中，职业最高等级为<strong style="color: var(--glow-green);">100级</strong>。</p>
        <p><strong style="color: #ff6b6b;">外交官职业不可用</strong>于第六赛季。</p>
        <h3>可用职业</h3>
        <ul>
          <li><strong>工程师：</strong>建造和升级建筑</li>
          <li><strong>战争指挥官：</strong>军事增强</li>
          <li><strong>探险家：</strong>探索和资源采集</li>
          <li><strong>商人：</strong>贸易和额外资源</li>
        </ul>
        <a href="#" class="btn" style="margin-top: 20px;"><i class="fas fa-info-circle"></i> 职业详情</a>
      `,
      map: `
        <p>第六赛季地图大小与第五赛季相同，大约相当于<strong>9张S0地图</strong>（第零赛季）。</p>
        <p>图片右侧的列是<strong>地图图例</strong>，显示每个地标的名称和图标，方便在地图上快速识别。</p>
        <div class="map-container">
          <img src="image/official-map.png" alt="第六赛季官方地图">
          <p style="margin-top: 15px;"><a href="image/official-map-hq-scaled.png" target="_blank">下载高清地图</a></p>
        </div>
        <div class="map-legend">
          <div class="map-legend-item"><h4>贸易站</h4><p>图例图标：紫色方框内的<strong>白色圆形图标，类似平台或小盆</strong>。这是与贸易和赛季收益相关的贸易站。</p></div>
          <div class="map-legend-item"><h4>前哨</h4><p>图例图标：橙色方框内的<strong>白色石头建筑或雕像</strong>。代表对控制和扩张至关重要的前沿军事据点。</p></div>
          <div class="map-legend-item"><h4>游戏机</h4><p>图例图标：粉色方框内的<strong>白色小型设备，类似街机或立式屏幕</strong>。此地标与特殊赛季活动相关。</p></div>
          <div class="map-legend-item"><h4>圣殿</h4><p>图例图标：红色方框内的<strong>发光金色徽章，类似火焰或王冠</strong>。圣殿是阵营竞争最重要的据点之一。</p></div>
          <div class="map-legend-item"><h4>祭坛</h4><p>图例图标：黄色方框内的<strong>白色阶梯式建筑，类似神殿或石阶</strong>，下方有小橙色条。祭坛授予强力增益，是关键战略目标。</p></div>
          <div class="map-legend-item"><h4>祖先神殿</h4><p>图例图标：深红色方框内的<strong>闪亮金色徽章，类似神圣文物或古代印章</strong>。地图上稀有的高价值地标。</p></div>
        </div>
      `,
      next: `
        <p>现在你已经了解了第六赛季的概览，是时候为下一步做准备了：</p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-top: 20px;">
          <div style="background: rgba(0, 255, 136, 0.1); padding: 20px; border-radius: 12px; border: 1px solid rgba(0, 255, 136, 0.2);">
            <h4 style="color: var(--glow-green); margin-bottom: 10px;"><i class="fas fa-hourglass-start"></i> 赛季前</h4>
            <p>了解赛季前活动和阵营奖励</p>
            <a href="#timeline" class="btn" style="margin-top: 10px; padding: 10px 20px; font-size: 0.9rem;">立即开始</a>
          </div>
          <div style="background: rgba(0, 255, 136, 0.1); padding: 20px; border-radius: 12px; border: 1px solid rgba(0, 255, 136, 0.2);">
            <h4 style="color: var(--glow-green); margin-bottom: 10px;"><i class="fas fa-chess"></i> 开局策略</h4>
            <p>赛季前几天的最佳策略</p>
            <a href="#timeline" class="btn" style="margin-top: 10px; padding: 10px 20px; font-size: 0.9rem;">立即学习</a>
          </div>
          <div style="background: rgba(0, 255, 136, 0.1); padding: 20px; border-radius: 12px; border: 1px solid rgba(0, 255, 136, 0.2);">
            <h4 style="color: var(--glow-green); margin-bottom: 10px;"><i class="fas fa-calendar-week"></i> 第一周</h4>
            <p>第一周活动详情</p>
            <a href="#timeline" class="btn" style="margin-top: 10px; padding: 10px 20px; font-size: 0.9rem;">探索</a>
          </div>
        </div>
      `
    },
    sidebarBody: `
      <img src="image/season-6-main-banner.png" alt="第六赛季" style="width: 100%; border-radius: 12px; margin-bottom: 15px;">
      <span class="badge" style="display: block; text-align: center; margin-bottom: 20px;">6 份指南可用</span>
      <h4 style="color: var(--glow-green); margin-bottom: 15px;">主要指南</h4>
      <ul class="guide-list">
        <li><a href="#overview"><i class="fas fa-chevron-right"></i> 概览</a></li>
        <li><a href="#story"><i class="fas fa-chevron-right"></i> 故事</a></li>
        <li><a href="#timeline"><i class="fas fa-chevron-right"></i> 活动日程</a></li>
        <li><a href="#resources"><i class="fas fa-chevron-right"></i> 资源</a></li>
        <li><a href="#buildings"><i class="fas fa-chevron-right"></i> 建筑</a></li>
        <li><a href="#stores"><i class="fas fa-chevron-right"></i> 商店</a></li>
        <li><a href="#rewards"><i class="fas fa-chevron-right"></i> 奖励</a></li>
      </ul>
      <h4 style="color: var(--glow-green); margin: 20px 0 15px;">快速链接</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 10px;">
        <a href="#professions" class="btn" style="padding: 8px 15px; font-size: 0.85rem;"><i class="fas fa-user-cog"></i> 职业</a>
        <a href="#map" class="btn" style="padding: 8px 15px; font-size: 0.85rem;"><i class="fas fa-map"></i> 地图</a>
      </div>
    `,
    footerSections: [
      `<h3>🌴 Last War Tutorial</h3>
       <p>Last War: 生存游戏的非官方综合指南。</p>
       <p>涵盖所有赛季的完整攻略、技巧和策略。</p>`,
      `<h3>快速链接</h3>
       <ul>
         <li><a href="#overview"><i class="fas fa-angle-right"></i> 概览</a></li>
         <li><a href="#timeline"><i class="fas fa-angle-right"></i> 活动日程</a></li>
         <li><a href="#stores"><i class="fas fa-angle-right"></i> 商店</a></li>
         <li><a href="#rewards"><i class="fas fa-angle-right"></i> 奖励</a></li>
       </ul>`,
      `<h3>联系我们</h3>
       <ul>
         <li><a href="#"><i class="fab fa-discord"></i> Discord</a></li>
         <li><a href="#"><i class="fab fa-facebook"></i> Facebook</a></li>
         <li><a href="#"><i class="fab fa-twitter"></i> Twitter</a></li>
         <li><a href="#"><i class="fab fa-youtube"></i> YouTube</a></li>
       </ul>`
    ],
    copyright: `
      <p>&copy; 2026 — Last War Tutorial. 本站所有原创内容受版权保护。</p>
      <p>Last War Tutorial 是独立的非官方网站。</p>
      <p>网站开发者 General-c4</p>
    `
  };

  const LANGS = { en, zh };

  // ===== LANGUAGE SWITCHING LOGIC =====
  function setLang(lang) {
    if (lang === 'ar') {
      restoreArabic();
      return;
    }
    const t = LANGS[lang];
    if (!t) return;

    // Direction & lang
    document.documentElement.dir = t.dir;
    document.documentElement.lang = lang;
    document.title = t.pageTitle;

    // Subtitle
    document.querySelector('.logo-text span').textContent = t.siteSubtitle;

    // Nav
    const navLinks = document.querySelectorAll('#navMenu li a');
    t.nav.forEach((html, i) => { if (navLinks[i]) navLinks[i].innerHTML = html; });

    // Sidebar nav
    const sidebarLinks = document.querySelectorAll('#sidebarNav li a');
    t.nav.forEach((html, i) => { if (sidebarLinks[i]) sidebarLinks[i].innerHTML = html; });

    // Hero
    document.querySelector('.hero-content').innerHTML = t.heroContent;

    // Card headers
    const cardIds = ['overview','story','timeline','resources','buildings','rewards','stores','professions','map','next'];
    cardIds.forEach(id => {
      const h = document.querySelector('#' + id + ' .card-header h3');
      if (h && t.cardHeaders[id]) h.textContent = t.cardHeaders[id];
    });

    // Card bodies
    Object.keys(t.cardBodies).forEach(id => {
      const b = document.querySelector('#' + id + ' .card-body');
      if (b) b.innerHTML = t.cardBodies[id];
    });

    // Sidebar
    document.querySelector('.sidebar .card-header h3').textContent = t.sidebarHeader;
    document.querySelector('.sidebar .card-body').innerHTML = t.sidebarBody;

    // Footer
    const footerSections = document.querySelectorAll('.footer-section');
    t.footerSections.forEach((html, i) => { if (footerSections[i]) footerSections[i].innerHTML = html; });
    document.querySelector('.copyright').innerHTML = t.copyright;

    // Update buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    localStorage.setItem('lwt-lang', lang);
    // Close sidebar if open
    closeSidebar();
    reinitAnimations();
  }

  function restoreArabic() {
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
    document.title = originals.pageTitle;
    document.querySelector('.logo-text span').textContent = originals.siteSubtitle;

    // Nav
    const navLinks = document.querySelectorAll('#navMenu li a');
    originals.navItems.forEach((html, i) => { if (navLinks[i]) navLinks[i].innerHTML = html; });

    // Sidebar nav
    const sidebarLinks = document.querySelectorAll('#sidebarNav li a');
    originals.sidebarNavItems.forEach((html, i) => { if (sidebarLinks[i]) sidebarLinks[i].innerHTML = html; });

    // Hero
    document.querySelector('.hero-content').innerHTML = originals.heroContent;

    // Card headers & bodies
    const cardIds = ['overview','story','timeline','resources','buildings','rewards','stores','professions','map','next'];
    cardIds.forEach(id => {
      const h = document.querySelector('#' + id + ' .card-header h3');
      if (h && originals.cardHeaders[id]) h.textContent = originals.cardHeaders[id];
      const b = document.querySelector('#' + id + ' .card-body');
      if (b && originals.cardBodies[id]) b.innerHTML = originals.cardBodies[id];
    });

    // Sidebar
    document.querySelector('.sidebar .card-header h3').textContent = originals.sidebarHeader;
    document.querySelector('.sidebar .card-body').innerHTML = originals.sidebarBody;

    // Footer
    const footerSections = document.querySelectorAll('.footer-section');
    originals.footerSections.forEach((html, i) => { if (footerSections[i]) footerSections[i].innerHTML = html; });
    document.querySelector('.copyright').innerHTML = originals.copyright;

    // Update buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === 'ar');
    });

    localStorage.setItem('lwt-lang', 'ar');
    // Close sidebar if open
    closeSidebar();
    reinitAnimations();
  }

  function reinitAnimations() {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);
    document.querySelectorAll('.card, .timeline-item, .resource-card, .building-card, .reward-item').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  }

  // Sync all lang buttons across both switchers
  function syncLangButtons(lang) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  }

  // ===== EVENT DELEGATION =====
  // Use event delegation so handlers survive innerHTML swaps
  document.addEventListener('click', function(e) {
    // Language buttons (both desktop and mobile)
    if (e.target.classList.contains('lang-btn')) {
      setLang(e.target.dataset.lang);
      syncLangButtons(e.target.dataset.lang);
      return;
    }

    // Store tabs
    if (e.target.classList.contains('store-tab')) {
      document.querySelectorAll('.store-tab').forEach(t => t.classList.remove('active'));
      e.target.classList.add('active');
      document.querySelectorAll('.store-content').forEach(c => c.classList.remove('active'));
      const tabId = e.target.getAttribute('data-tab');
      const target = document.getElementById(tabId);
      if (target) target.classList.add('active');
      return;
    }

    // Image zoom
    const imgEl = e.target.closest('.card-body img, .story-image img, .map-container img, .store-item img, .reward-item img');
    if (imgEl && imgEl.tagName === 'IMG') {
      const overlayImg = document.getElementById('overlayImage');
      const overlay = document.getElementById('imageOverlay');
      if (overlayImg && overlay) {
        overlayImg.src = imgEl.src;
        overlay.classList.add('active');
      }
      return;
    }

    // Overlay close
    if (e.target.closest('#imageOverlay')) {
      document.getElementById('imageOverlay').classList.remove('active');
      return;
    }

    // Mobile menu - toggle header-actions
    if (e.target.closest('#mobileMenu')) {
      openSidebar();
      return;
    }

    // Sidebar close button
    if (e.target.closest('#sidebarClose')) {
      closeSidebar();
      return;
    }

    // Sidebar overlay click to close
    if (e.target.id === 'sidebarOverlay') {
      closeSidebar();
      return;
    }

    // Sidebar nav link click
    if (e.target.closest('.sidebar-nav a')) {
      closeSidebar();
      return;
    }
  });

  function openSidebar() {
    document.getElementById('mobileSidebar').classList.add('open');
    document.getElementById('sidebarOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    document.getElementById('mobileSidebar').classList.remove('open');
    document.getElementById('sidebarOverlay').classList.remove('active');
    document.body.style.overflow = '';
  }

  // ===== INIT =====
  saveOriginals();

  // Apply saved language on load
  const saved = localStorage.getItem('lwt-lang');
  if (saved && saved !== 'ar') {
    setLang(saved);
  }
})();
