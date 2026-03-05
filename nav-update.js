// 在导航栏添加热点话题链接
const navSections = document.querySelector('.nav-sections');
if (navSections) {
    const hotspotCard = document.createElement('a');
    hotspotCard.href = 'hotspots.html';
    hotspotCard.className = 'nav-card';
    hotspotCard.innerHTML = `
        <div class="nav-icon">🔥</div>
        <div class="nav-title">热点话题</div>
        <div class="nav-desc">Topic Rush监控</div>
    `;
    navSections.appendChild(hotspotCard);
}
