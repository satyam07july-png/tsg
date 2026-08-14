from pathlib import Path
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak

root = Path(__file__).resolve().parent
source = root / 'project-status-presentation.md'
out_pdf = root / 'project-status-presentation.pdf'

styles = getSampleStyleSheet()
styles['Title'].fontName = 'Helvetica-Bold'
styles['Title'].fontSize = 20
styles['Title'].textColor = colors.HexColor('#0f4c81')
styles['Heading1'].fontName = 'Helvetica-Bold'
styles['Heading1'].fontSize = 14
styles['Heading1'].textColor = colors.HexColor('#1f5f8b')
styles['Heading2'].fontName = 'Helvetica-Bold'
styles['Heading2'].fontSize = 12
styles['Heading2'].textColor = colors.HexColor('#2f4f4f')
styles['BodyText'].fontName = 'Helvetica'
styles['BodyText'].fontSize = 10
styles['BodyText'].leading = 14
styles['Bullet'].fontName = 'Helvetica'
styles['Bullet'].fontSize = 10
styles['Bullet'].leading = 13

story = []
story.append(Paragraph('Dizital Adda LMS - Project Presentation', styles['Title']))
story.append(Spacer(1, 12))

for raw_line in source.read_text(encoding='utf-8').splitlines():
    line = raw_line.rstrip()
    if not line:
        story.append(Spacer(1, 6))
        continue
    if line.startswith('# '):
        story.append(Paragraph(line[2:], styles['Heading1']))
    elif line.startswith('## '):
        story.append(Paragraph(line[3:], styles['Heading2']))
    elif line.startswith('---'):
        story.append(Spacer(1, 8))
    elif line.startswith('- '):
        story.append(Paragraph(f"• {line[2:]}", styles['Bullet']))
    else:
        story.append(Paragraph(line, styles['BodyText']))

pdf = SimpleDocTemplate(str(out_pdf), pagesize=letter, rightMargin=36, leftMargin=36, topMargin=36, bottomMargin=36)
pdf.build(story)
print(f'Created {out_pdf}')
