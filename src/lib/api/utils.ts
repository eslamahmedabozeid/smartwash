export function parseHeroTitle(title: string) {
  const match = title.match(/^(.+?)\s+(Starting)\s+(From\s+.+)$/i);

  if (match) {
    return {
      title1: match[1].trim(),
      title2: match[2].trim(),
      title3: match[3].trim(),
    };
  }

  return {
    title1: title,
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
