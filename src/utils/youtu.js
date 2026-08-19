/**
 * Pulls the 11-character YouTube video ID out of any common URL shape:
 *   - https://youtu.be/VIDEO_ID
 *   - https://www.youtube.com/watch?v=VIDEO_ID
 *   - https://www.youtube.com/embed/VIDEO_ID
 *   - https://www.youtube.com/shorts/VIDEO_ID
 * All of the above may also carry query params (?si=..., &t=...) — those
 * are ignored.
 *
 * Returns null if no ID could be found, so callers can fall back to a
 * placeholder image instead of rendering a broken <img>.
 */
export function getYoutubeId(url) {
  if (!url) return null;

  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");

    // youtu.be/VIDEO_ID
    if (host === "youtu.be") {
      const id = parsed.pathname.slice(1).split("/")[0];
      return id || null;
    }

    if (host === "youtube.com" || host === "m.youtube.com") {
      // watch?v=VIDEO_ID
      if (parsed.pathname === "/watch") {
        return parsed.searchParams.get("v");
      }

      // /embed/VIDEO_ID  or  /shorts/VIDEO_ID
      const match = parsed.pathname.match(/^\/(embed|shorts)\/([^/?#]+)/);
      if (match) {
        return match[2];
      }
    }
  } catch {
    // Not a valid absolute URL — fall through to the regex fallback below.
  }

  // Last-resort fallback for anything the URL parser above didn't catch
  // (e.g. a malformed or partial string).
  const fallback = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([^?&/#]+)/
  );
  return fallback ? fallback[1] : null;
}

/**
 * Returns a thumbnail image URL for a YouTube video link, or a blank
 * transparent placeholder if the ID couldn't be parsed (keeps <img> from
 * showing a broken-image icon).
 *
 * quality: "max" (1280x720, not always available), "hq" (480x360, always
 * available — the safe default), "mq" (320x180), "sd" (640x480).
 */
export function getYoutubeThumb(url, quality = "hq") {
  const id = getYoutubeId(url);
  if (!id) {
    // 1x1 transparent gif — avoids a broken-image icon in the UI.
    return "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBTAA7";
  }

  const qualityMap = {
    max: "maxresdefault",
    hq: "hqdefault",
    mq: "mqdefault",
    sd: "sddefault",
  };

  return `https://img.youtube.com/vi/${id}/${qualityMap[quality] || "hqdefault"}.jpg`;
}