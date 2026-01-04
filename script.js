/* script.js
   Edit the `items` array below to change button labels and the content shown when a button is clicked.
   Each item = { id: "unique-id", label: "Button label", html: "<p>HTML shown in info panel</p>" }
   You can add/remove entries. The page will generate buttons automatically.
*/

const items = [
  /* Default 30 items; replace label and html for each entry as you like */
  { id: "item-1", label: "Button 1", html: "<h3 class='title'>Button 1</h3><p class='body'>Info for button 1. Replace this with whatever you want to show.</p>" },
  { id: "item-2", label: "Button 2", html: "<h3 class='title'>Button 2</h3><p class='body'>Info for button 2. Add links, code, lists, or formatted text.</p>" },
  { id: "item-3", label: "Button 3", html: "<h3 class='title'>Button 3</h3><p class='body'>Example content for item 3.</p>" },
  { id: "item-4", label: "Button 4", html: "<h3 class='title'>Button 4</h3><p class='body'>You control this text from script.js.</p>" },
  { id: "item-5", label: "Button 5", html: "<h3 class='title'>Button 5</h3><p class='body'>Make this short or long—HTML is supported.</p>" },
  { id: "item-6", label: "Button 6", html: "<h3 class='title'>Button 6</h3><p class='body'>Tip: keep content readable and concise.</p>" },
  { id: "item-7", label: "Button 7", html: "<h3 class='title'>Button 7</h3><p class='body'>Edit labels to reflect real names when ready.</p>" },
  { id: "item-8", label: "Button 8", html: "<h3 class='title'>Button 8</h3><p class='body'>This is a demo template.</p>" },
  { id: "item-9", label: "Button 9", html: "<h3 class='title'>Button 9</h3><p class='body'>You can include anchor tags and images too.</p>" },
  { id: "item-10", label: "Button 10", html: "<h3 class='title'>Button 10</h3><p class='body'>Click another button to change the panel.</p>" },
  { id: "item-11", label: "Button 11", html: "<h3 class='title'>Button 11</h3><p class='body'>Customize freely.</p>" },
  { id: "item-12", label: "Button 12", html: "<h3 class='title'>Button 12</h3><p class='body'>Replace this text in script.js.</p>" },
  { id: "item-13", label: "Button 13", html: "<h3 class='title'>Button 13</h3><p class='body'>Supports basic HTML markup.</p>" },
  { id: "item-14", label: "Button 14", html: "<h3 class='title'>Button 14</h3><p class='body'>Use <strong>bold</strong> or <em>italic</em> if you like.</p>" },
  { id: "item-15", label: "Button 15", html: "<h3 class='title'>Button 15</h3><p class='body'>You can add lists:<ul><li>One</li><li>Two</li></ul></p>" },
  { id: "item-16", label: "Button 16", html: "<h3 class='title'>Button 16</h3><p class='body'>Keep content safe—avoid posting private/personal data.</p>" },
  { id: "item-17", label: "Button 17", html: "<h3 class='title'>Button 17</h3><p class='body'>This template is mobile-friendly.</p>" },
  { id: "item-18", label: "Button 18", html: "<h3 class='title'>Button 18</h3><p class='body'>Add images by using &lt;img src='...' /&gt; in the html field.</p>" },
  { id: "item-19", label: "Button 19", html: "<h3 class='title'>Button 19</h3><p class='body'>Try long-form content too.</p>" },
  { id: "item-20", label: "Button 20", html: "<h3 class='title'>Button 20</h3><p class='body'>Add links: &lt;a href='https://example.com' target='_blank'&gt;Example&lt;/a&gt;</p>" },
  { id: "item-21", label: "Button 21", html: "<h3 class='title'>Button 21</h3><p class='body'>Button 21 content.</p>" },
  { id: "item-22', label: 'Button 22", html: "<h3 class='title'>Button 22</h3><p class='body'>Button 22 content.</p>" },
  { id: "item-23", label: "Button 23", html: "<h3 class='title'>Button 23</h3><p class='body'>Button 23 content.</p>" },
  { id: "item-24", label: "Button 24", html: "<h3 class='title'>Button 24</h3><p class='body'>Button 24 content.</p>" },
  { id: "item-25", label: "Button 25", html: "<h3 class='title'>Button 25</h3><p class='body'>Button 25 content.</p>" },
  { id: "item-26", label: "Button 26", html: "<h3 class='title'>Button 26</h3><p class='body'>Button 26 content.</p>" },
  { id: "item-27", label: "Button 27", html: "<h3 class='title'>Button 27</h3><p class='body'>Button 27 content.</p>" },
  { id: "item-28", label: "Button 28", html: "<h3 class='title'>Button 28</h3><p class='body'>Button 28 content.</p>" },
  { id: "item-29", label: "Button 29", html: "<h3 class='title'>Button 29</h3><p class='body'>Button 29 content.</p>" },
  { id: "item-30", label: "Button 30", html: "<h3 class='title'>Button 30</h3><p class='body'>Button 30 content.</p>" }
];

// Helper to build the UI
const buttonsContainer = document.getElementById('buttons');
const infoPanel = document.getElementById('info-panel');
let activeButtonId = null;

function createButton(item){
  const btn = document.createElement('button');
  btn.className = 'fancy-btn';
  btn.type = 'button';
  btn.id = item.id;
  btn.textContent = item.label;
  btn.setAttribute('aria-controls', 'info-panel');
  btn.setAttribute('aria-expanded', 'false');
  btn.addEventListener('click', () => onButtonClick(item, btn));
  btn.addEventListener('keydown', (e) => {
    if(e.key === 'Enter' || e.key === ' '){
      e.preventDefault();
      btn.click();
    }
  });
  return btn;
}

function renderButtons(){
  buttonsContainer.innerHTML = '';
  items.forEach(it => {
    const b = createButton(it);
    buttonsContainer.appendChild(b);
  });
}

function onButtonClick(item, btn){
  // update active state
  const prev = document.querySelector('.fancy-btn.active');
  if(prev && prev !== btn){
    prev.classList.remove('active');
    prev.setAttribute('aria-expanded','false');
  }

  const isSame = activeButtonId === item.id;
  activeButtonId = isSame ? null : item.id;

  if(isSame){
    // collapse: show placeholder
    btn.classList.remove('active');
    btn.setAttribute('aria-expanded','false');
    infoPanel.querySelector('.info-inner').innerHTML = "<p class='placeholder'>Click any button above to view details here.</p>";
  } else {
    btn.classList.add('active');
    btn.setAttribute('aria-expanded','true');
    // set content
    infoPanel.querySelector('.info-inner').innerHTML = item.html;
    // smooth reveal
    infoPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

// Initial render
renderButtons();