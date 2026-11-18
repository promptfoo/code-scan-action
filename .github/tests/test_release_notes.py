from pathlib import Path
import runpy
import unittest


script = Path(__file__).resolve().parents[1] / "scripts/release-notes.py"
release_notes = runpy.run_path(str(script))["release_notes"]


class ReleaseNotesTest(unittest.TestCase):
    def test_extracts_only_the_requested_release(self):
        notes = "### Before upgrading\n\nUse the pinned scanner.\n\n<details>\n<summary>All changes</summary>\n\n- Fix\n</details>\n"
        changelog = f"## [0.2.4](next)\n\nNewer\n\n## [0.2.3](current)\n\n{notes}\n## [0.2.2](old)\n\nOlder\n"
        self.assertEqual(release_notes(changelog, "0.2.3"), notes)

    def test_fails_on_missing_ambiguous_or_empty_notes(self):
        for changelog in (
            "## [0x2x3](wrong)\nSomething\n",
            "## [0.2.30](different)\nSomething\n",
            "## [0.2.3](first)\nOne\n## [0.2.3](duplicate)\nTwo\n",
            "## [0.2.3](empty)\n \n## [0.2.2](older)\nOld notes\n",
        ):
            with self.subTest(changelog=changelog), self.assertRaises(ValueError):
                release_notes(changelog, "0.2.3")


if __name__ == "__main__":
    unittest.main()
