document.addEventListener('DOMContentLoaded', function () {
    loadEarnings();
    loadRewards();
});

async function loadEarnings() {
    var container = document.getElementById('earnings-grid');

    try {
        var earnings = await fetchJson('data/arcade-earnings.json');
        renderEarnings(container, earnings);
    } catch (error) {
        console.error(error);
        renderMessage(container, 'Unable to load earning cards right now.', true);
    }
}

async function loadRewards() {
    var container = document.getElementById('rewards-grid');

    try {
        var rewards = await fetchJson('data/arcade-rewards.json');
        renderRewards(container, rewards);
    } catch (error) {
        console.error(error);
        renderMessage(container, 'Unable to load rewards right now.', true);
    }
}

async function fetchJson(url) {
    var response = await fetch(url);

    if (!response.ok) {
        throw new Error('Failed to load ' + url + ' (' + response.status + ')');
    }

    return response.json();
}

function renderEarnings(container, earnings) {
    container.innerHTML = '';

    if (!earnings.length) {
        renderMessage(container, 'No earning cards available yet.', false);
        return;
    }

    earnings.forEach(function (earning) {
        container.appendChild(buildEarningCard(earning));
    });
}

function renderRewards(container, rewards) {
    container.innerHTML = '';

    if (!rewards.length) {
        renderMessage(container, 'No rewards available yet.', false);
        return;
    }

    rewards.forEach(function (reward) {
        container.appendChild(buildRewardCard(reward));
    });
}

function buildEarningCard(earning) {
    var card = document.createElement('article');
    card.className = 'earning-card';

    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'earning-toggle';
    button.setAttribute('aria-expanded', 'false');

    var header = document.createElement('div');
    header.className = 'earning-header';

    var labelWrap = document.createElement('div');
    labelWrap.className = 'earning-label-wrap';

    var icon = document.createElement('span');
    icon.className = 'earning-icon';

    var iconGlyph = document.createElement('i');
    iconGlyph.className = 'fa ' + (earning.icon || 'fa-star');
    iconGlyph.setAttribute('aria-hidden', 'true');
    icon.appendChild(iconGlyph);

    var textWrap = document.createElement('div');

    var title = document.createElement('h3');
    title.className = 'earning-title';
    title.textContent = earning.title;

    var summary = document.createElement('p');
    summary.className = 'earning-summary';
    summary.textContent = earning.summary;

    textWrap.appendChild(title);
    textWrap.appendChild(summary);

    labelWrap.appendChild(icon);
    labelWrap.appendChild(textWrap);

    var metaWrap = document.createElement('div');

    var badge = document.createElement('span');
    badge.className = 'earning-badge';
    badge.textContent = 'Up to ' + earning.upTo + ' tokens';

    var chevron = document.createElement('div');
    chevron.className = 'earning-chevron';
    chevron.innerHTML = '<i class="fa fa-chevron-down" aria-hidden="true"></i>';

    metaWrap.appendChild(badge);
    metaWrap.appendChild(chevron);

    header.appendChild(labelWrap);
    header.appendChild(metaWrap);
    button.appendChild(header);

    var details = document.createElement('div');
    details.className = 'earning-details';

    var detailTitle = document.createElement('div');
    detailTitle.className = 'detail-title';
    detailTitle.textContent = 'Token breakdown';

    var baseRow = document.createElement('div');
    baseRow.className = 'detail-row';

    var baseLabel = document.createElement('span');
    baseLabel.textContent = earning.base.label;

    var baseTokens = document.createElement('span');
    baseTokens.className = 'detail-tokens';
    baseTokens.textContent = '+' + earning.base.tokens;

    baseRow.appendChild(baseLabel);
    baseRow.appendChild(baseTokens);

    var divider = document.createElement('div');
    divider.className = 'detail-divider';

    var additionList = document.createElement('div');
    additionList.className = 'addition-list';

    earning.additions.forEach(function (addition) {
        var additionRow = document.createElement('div');
        additionRow.className = 'addition-row';

        var additionLabel = document.createElement('span');
        additionLabel.textContent = addition.label;

        var additionTokens = document.createElement('span');
        additionTokens.className = 'addition-tokens';
        additionTokens.textContent = '+' + addition.tokens;

        additionRow.appendChild(additionLabel);
        additionRow.appendChild(additionTokens);
        additionList.appendChild(additionRow);
    });

    details.appendChild(detailTitle);
    details.appendChild(baseRow);
    details.appendChild(divider);
    details.appendChild(additionList);

    button.addEventListener('click', function () {
        var isOpen = card.classList.toggle('is-open');
        button.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    card.appendChild(button);
    card.appendChild(details);
    return card;
}

function buildRewardCard(reward) {
    var card = document.createElement('article');
    card.className = 'reward-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-pressed', 'false');

    var imageWrap = document.createElement('div');
    imageWrap.className = 'reward-image-wrap';

    var image = document.createElement('img');
    image.className = 'reward-image';
    image.src = reward.image;
    image.alt = reward.alt || reward.name;

    imageWrap.appendChild(image);

    var body = document.createElement('div');
    body.className = 'reward-body';

    var topline = document.createElement('div');
    topline.className = 'reward-topline';

    var name = document.createElement('h3');
    name.className = 'reward-name';
    name.textContent = reward.name;

    var costPill = document.createElement('span');
    costPill.className = 'reward-cost-pill';

    var cost = document.createElement('span');
    cost.className = 'reward-cost';
    cost.textContent = reward.cost;

    var tokenWord = document.createElement('span');
    tokenWord.className = 'token-word';
    tokenWord.textContent = 'tokens';

    costPill.appendChild(cost);
    costPill.appendChild(tokenWord);

    topline.appendChild(name);
    topline.appendChild(costPill);

    var description = document.createElement('p');
    description.className = 'reward-description';
    description.textContent = reward.description;

    var footer = document.createElement('div');
    footer.className = 'reward-footer';

    var note = document.createElement('span');
    note.className = 'reward-note';
    note.textContent = 'Interactive preview only';

    var status = document.createElement('span');
    status.className = 'reward-status';
    status.textContent = 'Tap to preview';

    footer.appendChild(note);
    footer.appendChild(status);

    body.appendChild(topline);
    body.appendChild(description);
    body.appendChild(footer);

    card.appendChild(imageWrap);
    card.appendChild(body);

    card.addEventListener('click', function () {
        toggleRewardCard(card);
    });

    card.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleRewardCard(card);
        }
    });

    return card;
}

function toggleRewardCard(card) {
    var isSelected = card.getAttribute('aria-pressed') === 'true';
    var nextValue = !isSelected;
    var status = card.querySelector('.reward-status');

    card.setAttribute('aria-pressed', nextValue ? 'true' : 'false');
    status.textContent = nextValue ? 'Preview selected' : 'Tap to preview';
}

function renderMessage(container, message, isError) {
    container.innerHTML = '';

    var element = document.createElement('p');
    element.className = isError ? 'error-message' : 'loading-message';
    element.textContent = message;
    container.appendChild(element);
}
