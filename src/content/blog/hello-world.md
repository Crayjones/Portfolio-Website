---
title: "Hello World!"
description: "My first blog post!"
pubDate: "2026-02-21"
tags: ["Personal"]
---

## About Me

Hi everyone! My name's Cameron Jones and this is my first blog post, so I figured the best place to start is introducing myself — who I am, how I got into cybersecurity, and what I've been up to.

## Who I Am

I'm a Computer Science student at Tennessee Technological University, currently in my sophomore year with an expected graduation of May 2028. My focus is cybersecurity, and at this point it's less of a major and more of an obsession. I'm a mentor in the Cyber Interest Groups here at Tech, where I help design labs for students learning the ropes of cybersecurity — both hands-on and presentation-based. When I'm not in class or at a club meeting, I'm usually working on Hack The Box, tinkering with my projects, or preparing for the next competition.

## How I Got Started

My serious introduction to cybersecurity came through CyberPatriot, a national high school competition where teams harden operating systems against known vulnerabilities. I ended up placing **1st in Tennessee**, which was a huge confidence boost and honestly what convinced me that this was the path I wanted to pursue seriously.

During that time I also wrote my first real "useful" script — a PowerShell tool that automated the auditing of local and Active Directory user accounts to quickly surface unauthorized credentials. It wasn't anything glamorous, but it was the first time I built something that actually solved a real problem, and that feeling hooked me.

## Competitions

Competitions have been one of the biggest parts of my growth. Here's a quick rundown of what I've been involved with:

**Collegiate Cyber Defense Competition (Feb 2026 - Present)** — CCDC is widely considered one of the most stressful collegiate competitions out there. You're defending live infrastructure against an active red team that is actively trying to kick you out of your own systems — while also completing business injects. We recently placed **1st at the SECCDC Qualifiers**, which means we're heading to regionals. I've been writing scripts to automate hardening and firewall configuration on Windows Server environments, which has been a great learning experience and way to strengthen my skills.

**Department of Energy CyberForce Competition (Nov 2025)** — This one was a highlight. Out of 96 collegiate teams nationwide, my team placed **3rd** in an 8-hour defensive + CTF challenge. We managed to place **1st in the defense portion**, keeping a network of 6 Windows and Linux virtual machines secured throughout the event. The CTF side covered everything from malware analysis and forensics to cryptography, log analysis, and even steganography. It was a great test with many topics to cover and understand.

**Collegiate Penetration Testing Competition (Oct 2025 - Jan 2026)** — I competed as an alternate for this one, which meant staying constantly prepared to step in while supporting the team through training and exercises. I kept sharp by working through Hack The Box challenges and maintaining a checklist of techniques and strategy. It was great practice for me to sharpen my penetration testing skills while preparing for next years CPTC.

## What I'm Into Technically

My interests span both the offensive and defensive sides of security, which I think gives me a more complete picture of how attacks and defenses interact.

On the **offensive side**, I've been working toward a solid foundation in penetration testing. I recently earned the **Red Team Operator certification from Zero-Point Security** (January 2026), which covers red team tradecraft in depth. I'm comfortable with tools like Mythic C2, Cobalt Strike, and Nmap, and I spend a good amount of time on Hack The Box sharpening those skills.

On the **defensive side**, I enjoy malware analysis, log forensics, and incident response. Tools like Autopsy, Ghidra, and the Sysinternals Suite have become second nature at this point, mostly from competition exposure.

I also really enjoy infrastructure work. My homelab runs on Proxmox with OPNsense managing a three-interface network (WAN, LAN, and OPT1) — WAN access is restricted exclusively to the Proxmox management interface, and the lab environment on OPT1 is fully isolated from core infrastructure. On top of that, I've layered in a Zero Trust model using Keycloak SSO and Cloudflare tunnels so that the Proxmox interface and Apache Guacamole are only reachable by authenticated users. Terraform handles provisioning — when I spin up a new Ubuntu or Kali jumpbox, it automatically creates the corresponding Keycloak account and Guacamole connection profile. It has definitely turned into something I'm proud and we have even started to use it as for our meetings.

## What I'm Working On

One project I've been building is **Tomoe**, a Python-based remote Windows administration tool. It supports both WinRM and SMB protocols, handles multi-threaded credential testing and command execution across multiple hosts, and includes recursive file transfer for both files and directories. It started as a utility to make my own life easier and has grown from there.

Beyond that, I'm focused on getting the most out of CCDC regionals, continuing to develop labs for the Cyber Interest Groups, and exploring more of the Windows internals side of things — there's always more to learn about how the OS works under the hood, which makes it more interesting to both attack and defend.

## What This Blog Will Be

I plan to use this space to document things I'm learning, write up competition experiences, share tools and scripts I build, and occasionally just think out loud about the industry. I am by no means a expert, but I hope to share some of what I learn with you all.

Thanks for reading, and I hope you stick around!