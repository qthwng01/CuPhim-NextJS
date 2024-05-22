export function getYears() {
  const years = []

  for (let i = 0; i <= 20; i++) {
    const year = new Date().getFullYear() - i
    years.push({
      id: (i + 1).toString(),
      name: year,
    })
  }

  return years
}

export const menuData = [
  {
    id: 1,
    href: '/list/phim-le?page=1',
    name: 'Phim lẻ'
  },
  {
    id: 2,
    href: '/list/phim-bo?page=1',
    name: 'Phim bộ'
  },
  {
    id: 3,
    href: '/list/hoat-hinh?page=1',
    name: 'Hoạt hình'
  },
  {
    id: 4,
    href: '/list/tv-shows?page=1',
    name: 'TV Show'
  },
  {
    id: 5,
    href: '',
    name: 'Phim yêu thích'
  }
]

export const blurBase64 =
'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAASCAYAAAA6yNxSAAAJcklEQVR4AQCBAH7/AAAAAP8FAAD/HxoZ/z86Of9dWVf/dHFu/4B9e/+Afnv/d3Zy/2lpZf9bXFf/UVNO/01RS/9QVE7/V1tV/19kXf9lamP/Z2xm/2VqZP9hZV//W19Z/1daVf9WWVP/WVpV/11eWf9iYV3/ZWNg/2VjYP9iYF3/XltY/1lWVP9XU1H/AIEAfv8ABQAA/xQNDP8uKCf/TklH/21oZv+EgH7/kI2K/5COi/+HhoP/eXl1/2tsaP9iZF//XmFc/2FkX/9obGb/cHRu/3Z6dP94fHb/dnp0/3F1b/9sb2n/aGtl/2dpZP9pamb/bm5q/3Nybv92dHH/dnRx/3Rxbv9wbGr/a2hm/2llY/8AgQB+/wAeFxb/LSYm/0hBQf9pY2L/iIOB/6Cbmv+tqaf/rquo/6WjoP+Xl5P/ioqG/4CBff99f3r/f4J9/4aJhP+OkYz/lJeS/5aZlP+Ul5L/j5KN/4qMh/+GiIP/hYaC/4iIhP+MjIj/kZCN/5WTkP+Wk5D/lJCO/5CMiv+MiIb/iYWD/wCBAH7/AD41Nv9ORUX/aWFh/4uDg/+rpKP/xL28/9HMyv/Tz83/y8jF/728uP+wr6v/pqai/6Okn/+mp6L/rK6p/7S2sf+5vLf/u765/7m8tv+0trH/r7Cs/6usqP+qq6f/ra2p/7Kxrf+3trL/u7m2/725t/+7t7X/uLOy/7Svrv+yrav/AIEAfv8AXlRV/25kZf+KgYH/rKSk/87Gxv/o4OD/9vDv//nz8v/x7ev/5eHf/9fV0v/OzMn/ysrG/8zNyP/T1M//2tvX/9/h3P/h497/3+Db/9rb1v/U1dD/0NHM/9DPy//T0c7/2NbT/97b2P/i393/5ODe/+Pf3f/g29r/3djW/9vV1P8AgQB+/wB4bW//iX1//6abnP/Jv8D/6+Lj///+/v//////////////////////+fbz/+/t6v/r6ub/7e3p//Pz7//6+/b////7/////f/9/vr/+Pn1//Lz7//v7ur/7u3q//Hw7P/39fL//fr4/////P/////////+///9+///+vj//fj2/wCBAH7/AIl8fv+ZjY//t6yt/9vR0v//9fb//////////////////////////////////////////f////7//////////////////////////////////////////f////z/////////////////////////////////////////////////AIEAfv8AjYGD/56SlP+9sbP/4tfZ///9/v////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AgQB+/wCIfH7/mY2P/7itr//f1NX///r7//////////////////////////////////////////////////////////////////////////////////////////z////7/////v///////////////////////////////////////////wCBAH7/AHtwcf+MgoP/rKKj/9PKyv/68fH////////////////////////////////////+//z8+P/7/fj//v/7///////////////////////7//n/9Pjy/+/z7f/u8uz/8vTv//j69f////z/////////////////////////////////AIEAfv8Aa2Ji/310dP+dlZX/xb29/+zl5P///////////////////////////////P/z9e//6+7p/+nu5//s8ev/8Pbv//P58v/y+fH/7vXt/+fu5//g5+D/3OLb/9vh2v/e493/5Onj/+zx6v/z9/H/+Pz2//v++P/7/vj/+vz3//n79v8AgQB+/wBdVlX/b2lo/4+Kif+4srH/39vZ///7+f//////////////////////8fXv/+Po4v/b4dr/2eDY/9vj2//e59//4eri/+Dq4f/c5t3/1d/W/87Yz//K08r/ydLJ/8zVzP/S29L/2uLa/+Lp4f/n7ub/6vDp/+rx6f/q8On/6e/o/wCBAH7/AFNQTf9mYmD/h4SB/6+tqv/X1dL/9vby//////////////////j99//n7eb/2ODY/8/Y0P/M183/ztnQ/9He0//U4db/0+DW/8/c0v/I1sv/ws/E/73KwP+8yb7/v8zB/8bSyP/O2tD/1uHX/9vm3f/e6eD/3+ng/9/o3//e6N//AIEAfv8AUFBM/2NjX/+EhID/ra2p/9TW0f/09/L/////////////////9P30/+Ls4//T3tX/ytbM/8bUyf/I1sv/y9vP/83e0v/N3tH/ydrN/8PUx/+8zcH/t8m8/7fHu/+6yr7/wdHF/8nZzf/R4NT/1+ba/9ro3f/b6d7/2+ne/9ro3f8AgQB+/wBTVVD/Zmhj/4eKhP+ws63/2NzW//f99v/////////////////2//j/5PDm/9Ti1//K2c7/xtfL/8jZzP/L3tD/zeHT/83h0//J3tD/w9jK/73Sw/+5zb//uMy+/7zQwv/D1sj/y97R/9Pm2P/Z697/3e/i/97w4//e7+L/3e/i/wCBAH7/AFleWP9scWr/jZOM/7a8tf/e5d7//v/+//////////////////v//v/o+Oz/2Ond/87g0//K3tD/y+DS/8/k1v/S6Nn/0ujZ/87l1v/J4ND/w9rK/77Wxv++1cb/wtnJ/8nf0P/R59j/2u/g/+D15v/k+Or/5frr/+X56//l+ev/AIEAfv8AYGZf/3N5cv+Um5T/vcW9/+Xu5f///////////////////////////+7/8//e8OP/0+fZ/8/l1v/R59j/1Ozc/9fv3//X8OD/1O3d/8/o1//J4tL/xd7O/8Xezf/J4dH/0OjY/9jw4P/h+On/5/7v/+v/8v/s//T/7f/0/+z/8/8BgQB+/wBka2T/d353/5igmP/BysH/6fPq////////////////////////////8v/3/+H15//X7N3/0+na/9Tr3P/Y8OD/2/Tj/9v15P/Y8uH/0+3c/83o1v/J5NL/yePS/83n1v/U7t3/3fbl/+X+7v/s//T/8P/4//H/+f/x//n/8f/5/45PjkBdIjvWAAAAAElFTkSuQmCC'
