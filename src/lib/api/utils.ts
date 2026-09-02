export function parseHeroTitle(title: string) {
  if (!title) {
    return { title1: "", title2: "", title3: "" };
  }

  const cleanTitle = title.trim();

  // Handle explicit newlines if present
  if (cleanTitle.includes("\n")) {
    const lines = cleanTitle.split("\n").map((l) => l.trim()).filter(Boolean);
    if (lines.length >= 2) {
      const line1 = lines[0];
      const line2 = lines.slice(1).join(" ");
      const enMatch = line2.match(/^(Starting)\s+(From\s+.+)$/i);
      if (enMatch) {
        return {
          title1: line1,
          title2: enMatch[1].trim(),
          title3: enMatch[2].trim(),
        };
      }
      const arMatch = line2.match(/^(بداية|تبدأ|يبدأ|ابتداء|إبتداء|ابتداءً|إبتداءً|بدءاً|بدءا|بدء)\s+(من\s+.+)$/u);
      if (arMatch) {
        return {
          title1: line1,
          title2: arMatch[1].trim(),
          title3: arMatch[2].trim(),
        };
      }
      return {
        title1: line1,
        title2: "",
        title3: line2,
      };
    }
  }

  // English: "Everything Your Clothes Need Starting From 3 • 6 • 9"
  const enMatch = cleanTitle.match(/^(.+?)\s+(Starting)\s+(From\s+.+)$/i);
  if (enMatch) {
    return {
      title1: enMatch[1].trim(),
      title2: enMatch[2].trim(),
      title3: enMatch[3].trim(),
    };
  }

  // English without "Starting": "Everything Your Clothes Need From 3 • 6 • 9"
  const enFromMatch = cleanTitle.match(/^(.+?)\s+(From\s+.+)$/i);
  if (enFromMatch) {
    return {
      title1: enFromMatch[1].trim(),
      title2: "",
      title3: enFromMatch[2].trim(),
    };
  }

  // Arabic with start word: "كل ما تحتاجه لملابسك بداية من 3 • 6 • 9" / "كل ما تحتاجه ملابسك تبدأ من 3 • 6 • 9"
  const arMatch = cleanTitle.match(
    /^(.+?)\s+(بداية|تبدأ|يبدأ|ابتداء|إبتداء|ابتداءً|إبتداءً|بدءاً|بدءا|بدء)\s+(من\s+.+)$/u
  );
  if (arMatch) {
    return {
      title1: arMatch[1].trim(),
      title2: arMatch[2].trim(),
      title3: arMatch[3].trim(),
    };
  }

  // Arabic with only "من" before numbers or items: "كل ما تحتاجه لملابسك من 3 • 6 • 9"
  const arFromMatch = cleanTitle.match(/^(.+?)\s+(من\s+[0-9٠-٩].+)$/u);
  if (arFromMatch) {
    return {
      title1: arFromMatch[1].trim(),
      title2: "",
      title3: arFromMatch[2].trim(),
    };
  }

  // Arabic with only starting word: "كل ما تحتاجه لملابسك بداية 3 • 6 • 9"
  const arStartMatch = cleanTitle.match(
    /^(.+?)\s+(بداية|تبدأ|يبدأ|ابتداء|إبتداء|ابتداءً|إبتداءً|بدءاً|بدءا|بدء)\s+(.+)$/u
  );
  if (arStartMatch) {
    return {
      title1: arStartMatch[1].trim(),
      title2: arStartMatch[2].trim(),
      title3: arStartMatch[3].trim(),
    };
  }

  // General Arabic "من" match
  const arGeneralFromMatch = cleanTitle.match(/^(.+?)\s+(من\s+.+)$/u);
  if (arGeneralFromMatch) {
    return {
      title1: arGeneralFromMatch[1].trim(),
      title2: "",
      title3: arGeneralFromMatch[2].trim(),
    };
  }

  return {
    title1: cleanTitle,
    title2: "",
    title3: "",
  };
}

export function splitHeroDescription(content: string) {
  const dotIndex = content.indexOf(". ");

  if (dotIndex === -1) {
    return { desc1: content, desc2: "" };
  }

  return {
    desc1: content.slice(0, dotIndex + 1),
    desc2: content.slice(dotIndex + 2),
  };
}

export function stripHtml(html: string) {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function getImageByRole(
  images: { role: string; url: string; alt: string }[] | undefined,
  role: string
) {
  return images?.find((image) => image.role === role);
}

export function sortByOrder<T extends { order: number }>(items: T[] | undefined) {
  return [...(items ?? [])].sort((a, b) => a.order - b.order);
}

export function parseContactContent(html: string) {
  const normalized = html.replace(/&nbsp;/g, " ");
  const paragraphs = [...normalized.matchAll(/<p>([\s\S]*?)<\/p>/gi)].map((match) =>
    match[1].replace(/<\/?em>/gi, "").trim()
  );

  const emMatch = normalized.match(/<em>([\s\S]*?)<\/em>/i);
  const subtitle = emMatch?.[1]?.trim() ?? paragraphs[1] ?? "";

  return {
    value: paragraphs[0] ?? stripHtml(html),
    subtitle,
  };
}

export function resolveFooterHref(url: string, lang: string): string {
  if (
    url.startsWith("http://") ||
    url.startsWith("https://") ||
    url.startsWith("mailto:") ||
    url.startsWith("tel:")
  ) {
    return url;
  }

  if (url.startsWith("/#")) {
    return `/${lang}${url.slice(1)}`;
  }

  if (url.startsWith("#")) {
    return `/${lang}${url}`;
  }

  if (url.startsWith(`/${lang}/`) || url === `/${lang}`) {
    return url;
  }

  if (url.startsWith("/en/") || url.startsWith("/ar/") || url === "/en" || url === "/ar") {
    return url;
  }

  if (url.startsWith("/")) {
    return `/${lang}${url}`;
  }

  return `/${lang}/${url}`;
}
