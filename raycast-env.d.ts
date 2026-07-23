/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `add-commit-sound` command */
  export type AddCommitSound = ExtensionPreferences & {}
  /** Preferences accessible in the `commit-sound-controls` command */
  export type CommitSoundControls = ExtensionPreferences & {}
  /** Preferences accessible in the `connect-github-account` command */
  export type ConnectGithubAccount = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `add-commit-sound` command */
  export type AddCommitSound = {}
  /** Arguments passed to the `commit-sound-controls` command */
  export type CommitSoundControls = {}
  /** Arguments passed to the `connect-github-account` command */
  export type ConnectGithubAccount = {}
}

