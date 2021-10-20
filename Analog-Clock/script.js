
setInterval(() => {
    
    let date = new Date();

    let h_Time = date.getHours();
    let m_Time = date.getMinutes();
    let s_Time = date.getSeconds();

    h_Rotation = (30 * h_Time) + (m_Time / 2);
    m_Rotation = 6 * m_Time;
    s_Rotation = 6 * s_Time;

    hour.style.transform = `rotate(${h_Rotation}deg)`;
    minute.style.transform = `rotate(${m_Rotation}deg)`;
    second.style.transform = `rotate(${s_Rotation}deg)`;

}, 1000);