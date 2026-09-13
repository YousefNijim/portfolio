# Media drop folder

Put the images here using **exactly these file names**. The code already points at these paths — as soon as a file exists, it shows up on the site. No renaming needed afterwards.

Format: **PNG** (or JPG for photos). Don't worry about compression — `next/image` handles it.

---

## 🔴 sho-abalak/ — HIGHEST PRIORITY

This is the flagship case study. Right now it has no visuals at all.

### phones/ — screenshots from the three Expo apps
| File name | What to capture |
|---|---|
| `customer.png` | The customer app — ideally the store list or an active order with live tracking |
| `business.png` | The business app — incoming orders screen or the menu manager |
| `driver.png` | The driver app — available deliveries or an in-progress delivery |

- **Portrait**, taken on a real device or the Expo simulator
- Minimum width **1080px**
- No status bar clutter if avoidable (silence notifications first)
- Use realistic data — real-looking store names and orders beat `test test 123`

### admin/ — screenshots from the Next.js dashboard
| File name | What to capture |
|---|---|
| `overview.png` | The live order oversight screen — the main control centre view |
| `businesses.png` | Business approvals, or the categories/areas/commission management screen |

- **Landscape**, browser window at **1440×900** or wider
- Full window including the sidebar — the layout is part of the story
- Hide any real customer names/phones before capturing

### cover.png
One strong image for the project card on the homepage. Either the admin overview, or a composed shot of the three phones together. Landscape, **1600×1000**.

---

## focusoura/
| File name | What to capture |
|---|---|
| `cover.png` | The dashboard with the virtual plant visible — the gamification is the hook |
| `insights.png` | *(optional)* The AI-generated study insights panel |

Landscape, 1600×1000.

---

## arjwan-istanbul/
| File name | What to capture |
|---|---|
| `cover.png` | The storefront homepage |
| `product-1.png` `product-2.png` `product-3.png` | Product detail pages — these become a horizontal scroll gallery |

Landscape, 1600×1000. Since it's a real store, use real products.

---

## shared/
| File name | What |
|---|---|
| `portrait.jpg` | Your photo for the About section. Square or 4:5 portrait, min 1200px. Plain background works best with this design. |
| `og.png` | *(I'll generate this)* Social share image, 1200×630 |

---

## If you can only do one thing

Do `sho-abalak/phones/` — the three phone screenshots. Showing four apps that talk to one API is the single strongest thing in your portfolio, and it's the one thing a screenshot can prove and a paragraph can't.
