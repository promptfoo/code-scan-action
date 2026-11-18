"""Print the requested Release Please section from a mirrored changelog."""

import argparse
from pathlib import Path
import re
import sys


def release_notes(changelog, version):
    if not re.fullmatch(r"[0-9]+\.[0-9]+\.[0-9]+", version):
        raise ValueError(f"Invalid release version: {version}")
    headings = list(re.finditer(r"^## \[([0-9]+\.[0-9]+\.[0-9]+)\][^\n]*$", changelog, re.MULTILINE))
    matches = [i for i, heading in enumerate(headings) if heading[1] == version]
    if len(matches) != 1:
        raise ValueError(f"Expected one changelog section for {version}, found {len(matches)}")
    index = matches[0]
    end = headings[index + 1].start() if index + 1 < len(headings) else len(changelog)
    notes = changelog[headings[index].end():end].strip("\n")
    if not notes.strip():
        raise ValueError(f"Empty changelog section for {version}")
    return notes + "\n"


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("version")
    parser.add_argument("changelog", type=Path)
    args = parser.parse_args()
    try:
        sys.stdout.write(release_notes(args.changelog.read_text(encoding="utf-8"), args.version))
    except ValueError as err:
        parser.exit(1, f"{err}\n")
