const ideas = [
  { title: "Auto-generate standards-aligned bell ringers", category: "Lesson Planning", tags: ["warmup", "standards"], description: "Launch each class quickly with targeted starter prompts aligned to your pacing guide." },
  { title: "Build differentiated practice sets in minutes", category: "Lesson Planning", tags: ["differentiation", "practice"], description: "Assign tiered activities so students work at the right challenge level." },
  { title: "Create instant exit tickets", category: "Assessment", tags: ["formative", "checks for understanding"], description: "Use fast checks to identify misconceptions before the next lesson." },
  { title: "Track prerequisite skill gaps", category: "Intervention", tags: ["diagnostic", "readiness"], description: "Identify missing skills and group students for targeted reteach." },
  { title: "Assign intervention pathways by concept", category: "Intervention", tags: ["reteach", "small groups"], description: "Auto-route students to custom support activities based on performance." },
  { title: "Prioritize state-tested standards", category: "Curriculum", tags: ["state test", "planning"], description: "Focus instructional time on priority standards with clear visibility." },
  { title: "Generate spiral review each week", category: "Lesson Planning", tags: ["spiral review", "retention"], description: "Keep previously taught concepts fresh through recurring mixed practice." },
  { title: "Surface frequent class-wide misconceptions", category: "Data Insights", tags: ["misconceptions", "analytics"], description: "See where many students struggle so you can address issues quickly." },
  { title: "Design quick SAT/ACT-style practice", category: "Test Prep", tags: ["assessment", "exam prep"], description: "Prepare students with question formats mirroring high-stakes exams." },
  { title: "Offer adaptive hints during independent work", category: "Student Support", tags: ["scaffolds", "adaptive"], description: "Students get just-in-time guidance without giving away the answer." },
  { title: "Convert worksheet topics into digital tasks", category: "Technology Integration", tags: ["digital", "workflow"], description: "Move paper assignments online while preserving instructional intent." },
  { title: "Identify students ready for enrichment", category: "Differentiation", tags: ["advanced", "growth"], description: "Flag students who have mastered content and need extension challenges." },
  { title: "Automate mixed-level homework", category: "Differentiation", tags: ["homework", "personalization"], description: "Generate homework sets tailored to student readiness and pace." },
  { title: "Support co-teaching with shared data dashboards", category: "Collaboration", tags: ["co-teaching", "planning"], description: "General and special education teachers can coordinate supports efficiently." },
  { title: "Monitor mastery by learning target", category: "Data Insights", tags: ["mastery", "targets"], description: "Track progress on each target to inform lesson adjustments." },
  { title: "Create warm-ups tied to yesterday's errors", category: "Assessment", tags: ["feedback loop", "warmup"], description: "Immediately address mistakes students made the previous day." },
  { title: "Set up station-rotation activities", category: "Classroom Workflow", tags: ["stations", "blended"], description: "Blend teacher-led, peer, and digital practice with clear task flow." },
  { title: "Build parent-friendly progress snapshots", category: "Communication", tags: ["families", "progress reports"], description: "Share concise updates that help caregivers support learning at home." },
  { title: "Find students needing attendance-related catch-up", category: "Intervention", tags: ["attendance", "recovery"], description: "Target support for students who missed critical instruction days." },
  { title: "Create standards-based reassessment sets", category: "Assessment", tags: ["reassessment", "grading"], description: "Offer focused second attempts tied to exact standards." },
  { title: "Plan small-group instruction from performance bands", category: "Classroom Workflow", tags: ["small groups", "data-driven"], description: "Use clear bands to form strategic groups for reteach or enrichment." },
  { title: "Assign skill boosters before new units", category: "Intervention", tags: ["unit launch", "readiness"], description: "Prevent frustration by refreshing key prerequisite knowledge first." },
  { title: "Use item analysis to improve future assessments", category: "Data Insights", tags: ["item analysis", "assessment quality"], description: "Refine question design using evidence of student response patterns." },
  { title: "Align assignments to district pacing", category: "Curriculum", tags: ["pacing", "district"], description: "Stay in sync with district maps while adapting for student needs." },
  { title: "Pull examples for reteach mini-lessons", category: "Lesson Planning", tags: ["mini-lessons", "reteach"], description: "Quickly build focused lessons based on current misconception trends." },
  { title: "Create challenge problems for early finishers", category: "Differentiation", tags: ["enrichment", "engagement"], description: "Keep advanced students engaged with meaningful extension tasks." },
  { title: "Schedule intervention blocks by concept urgency", category: "Intervention", tags: ["prioritization", "MTSS"], description: "Allocate support time to the skills with the highest impact." },
  { title: "Use growth reports for student goal conferences", category: "Student Support", tags: ["goals", "reflection"], description: "Help students set realistic goals using clear trend data." },
  { title: "Compare class periods to spot strategy wins", category: "Data Insights", tags: ["comparisons", "instructional strategies"], description: "Discover which techniques work best across different class sections." },
  { title: "Build benchmark review playlists", category: "Test Prep", tags: ["benchmark", "review"], description: "Organize targeted review in a sequence matched to test blueprints." },
  { title: "Detect over-practiced vs under-practiced skills", category: "Curriculum", tags: ["balance", "planning"], description: "Adjust instructional time for better coverage and long-term retention." },
  { title: "Auto-group students for peer tutoring", category: "Collaboration", tags: ["peer support", "grouping"], description: "Pair students intentionally so peer help is productive and supportive." },
  { title: "Map learning gaps for IEP goal support", category: "Student Support", tags: ["IEP", "special education"], description: "Use detailed skill evidence to align classroom supports with IEP goals." },
  { title: "Generate standards evidence for PLC meetings", category: "Collaboration", tags: ["PLC", "evidence"], description: "Bring concrete data to team conversations around instructional decisions." },
  { title: "Create make-up assignments quickly", category: "Classroom Workflow", tags: ["make-up work", "efficiency"], description: "Provide absent students with aligned work without extra planning time." },
  { title: "Use mastery heatmaps for reteach planning", category: "Data Insights", tags: ["heatmaps", "planning"], description: "Visualize strengths and needs at a glance before planning next steps." },
  { title: "Provide confidence-building scaffolded sequences", category: "Student Support", tags: ["scaffolding", "confidence"], description: "Guide struggling learners through gradual release practice progression." },
  { title: "Build cumulative quarter reviews", category: "Test Prep", tags: ["quarterly", "cumulative"], description: "Strengthen long-term retention before common assessments." },
  { title: "Use misconception libraries during live teaching", category: "Lesson Planning", tags: ["anticipate errors", "instruction"], description: "Prepare corrective prompts ahead of time for common mistakes." },
  { title: "Embed quick checks into direct instruction", category: "Assessment", tags: ["active learning", "checks"], description: "Insert fast formative moments to adjust pacing during lessons." },
  { title: "Coordinate intervention teams with shared flags", category: "Collaboration", tags: ["MTSS", "coordination"], description: "Keep counselors, coaches, and teachers aligned on priority students." },
  { title: "Assign extension tracks after mastery", category: "Differentiation", tags: ["mastery", "extensions"], description: "Move students to deeper applications once fundamentals are secure." },
  { title: "Plan tutoring sessions with skill diagnostics", category: "Intervention", tags: ["tutoring", "diagnostics"], description: "Target sessions precisely to maximize limited tutoring minutes." },
  { title: "Create standards-focused substitute plans", category: "Classroom Workflow", tags: ["sub plans", "continuity"], description: "Maintain momentum during teacher absences with aligned activities." },
  { title: "Link assessment results to reteach resources", category: "Technology Integration", tags: ["resource mapping", "workflow"], description: "Move directly from performance data to appropriate support materials." },
  { title: "Generate student-friendly feedback statements", category: "Communication", tags: ["feedback", "clarity"], description: "Provide actionable comments students can use immediately." },
  { title: "Spot trend lines before report card windows", category: "Data Insights", tags: ["grading", "trends"], description: "Use trajectory views to intervene before final grade deadlines." },
  { title: "Create math discourse prompts from errors", category: "Lesson Planning", tags: ["discussion", "reasoning"], description: "Turn common mistakes into rich classroom conversations." },
  { title: "Build targeted summer bridge packets", category: "Curriculum", tags: ["summer learning", "transition"], description: "Prepare students for next year with personalized maintenance work." },
  { title: "Celebrate growth milestones with student dashboards", category: "Student Support", tags: ["motivation", "ownership"], description: "Help learners see progress and stay motivated through visible wins." }
];

const storageKey = "derivita-ideas-selected";
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const ideaGrid = document.getElementById("ideaGrid");
const selectedCount = document.getElementById("selectedCount");
const progressBar = document.getElementById("progressBar");
const randomIdeaBtn = document.getElementById("randomIdeaBtn");
const cardTemplate = document.getElementById("ideaCardTemplate");

const selectedTitles = new Set(JSON.parse(localStorage.getItem(storageKey) || "[]"));
const categories = [...new Set(ideas.map((idea) => idea.category))].sort();

categories.forEach((category) => {
  const option = document.createElement("option");
  option.value = category;
  option.textContent = category;
  categoryFilter.appendChild(option);
});

function saveSelection() {
  localStorage.setItem(storageKey, JSON.stringify([...selectedTitles]));
}

function updateProgress() {
  const count = selectedTitles.size;
  selectedCount.textContent = `${count} selected`;
  progressBar.style.width = `${(count / ideas.length) * 100}%`;
}

function ideaMatches(idea, query, category) {
  const text = `${idea.title} ${idea.description} ${idea.tags.join(" ")} ${idea.category}`.toLowerCase();
  const matchesQuery = !query || text.includes(query);
  const matchesCategory = category === "all" || idea.category === category;
  return matchesQuery && matchesCategory;
}

function renderIdeas(highlightTitle = "") {
  const query = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;

  ideaGrid.textContent = "";
  const matches = ideas.filter((idea) => ideaMatches(idea, query, category));

  if (!matches.length) {
    ideaGrid.textContent = "No ideas matched your filters. Try another keyword or category.";
    return;
  }

  matches.forEach((idea, index) => {
    const card = cardTemplate.content.firstElementChild.cloneNode(true);
    const checkbox = card.querySelector("input");
    card.querySelector(".badge").textContent = `#${index + 1} ${idea.category}`;
    card.querySelector("h2").textContent = idea.title;
    card.querySelector(".description").textContent = idea.description;

    idea.tags.forEach((tag) => {
      const li = document.createElement("li");
      li.textContent = tag;
      card.querySelector(".tags").appendChild(li);
    });

    checkbox.checked = selectedTitles.has(idea.title);
    if (checkbox.checked) card.classList.add("selected");

    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        selectedTitles.add(idea.title);
        card.classList.add("selected");
      } else {
        selectedTitles.delete(idea.title);
        card.classList.remove("selected");
      }
      saveSelection();
      updateProgress();
    });

    if (highlightTitle && idea.title === highlightTitle) {
      card.style.outline = "3px solid #5a67ff";
      card.style.outlineOffset = "2px";
      card.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    ideaGrid.appendChild(card);
  });
}

searchInput.addEventListener("input", () => renderIdeas());
categoryFilter.addEventListener("change", () => renderIdeas());

randomIdeaBtn.addEventListener("click", () => {
  const choice = ideas[Math.floor(Math.random() * ideas.length)];
  renderIdeas(choice.title);
});

renderIdeas();
updateProgress();
