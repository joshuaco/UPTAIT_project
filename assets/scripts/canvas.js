window.addEventListener('load', () => {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');

    // Set canvas size
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    // Variables
    let painting = false;

    const startPosition = () => {
        painting = true; 
        draw(e);
    }

    const finishedPosition = () => {
        painting = false;
        ctx.beginPath();
    }

    const draw = (e) => {
        if(!painting) return;
        ctx.lineWidth = 10;
        ctx.lineCap = 'round';

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }

    // Event Listeners
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('touchstart', startPosition);
    canvas.addEventListener('mouseout', finishedPosition);
});