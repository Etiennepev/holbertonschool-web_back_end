#!/usr/bin/env python3
"""0-async_generator"""
import asyncio
import random


async def async_generator():
    """Yields a random number between 0 and 10 every second."""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
