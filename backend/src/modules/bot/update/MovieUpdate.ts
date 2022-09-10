import { Context, Markup } from 'telegraf';
import { Action, Command, Ctx, Hears, Help, On, Start, Update } from 'nestjs-telegraf';
// import { TelegrafContext } from './common/interfaces/telegraf-context.interface.ts';
import { BotAuditEventType, botAuditLogService } from '@components/auditLog/BotAuditLogService';
import { Inject } from 'typescript-ioc';
import { IMovieQueryService } from '@catalog/domain/movie/IMovieQueryService';

@Update()
export class MovieUpdate {

    @Inject private movieQueryService: IMovieQueryService;

    @Start()
    public async start(@Ctx() ctx: Context) {
        this.logEvent(ctx, BotAuditEventType.Start);

        return ctx.reply('Жизнь неожиданна прекрасна', Markup
            .keyboard([['🎬 Что посмотреть?']])
            .resize(),
        );
    }

    @Help()
    public async help(@Ctx() ctx: Context) {
        await ctx.reply('Жизнь неожиданна прекрасна', Markup
            .keyboard([['🎬 Что посмотреть?']])
            .resize(),
        );
    }

    @Command('wmts')
    public async getMovieCCommand(@Ctx() ctx: Context) {
        this.logEvent(ctx, BotAuditEventType.Command, { command: 'wmts' });

        await this.getRandomMovieResponse(ctx);
    }

    @On('sticker')
    public async on(@Ctx() ctx: Context) {
        await ctx.reply('👍');
    }

    @Hears('🎬 Что посмотреть?')
    public async hears(@Ctx() ctx: Context) {
        this.logEvent(ctx, BotAuditEventType.GetMovie);

        return this.getRandomMovieResponse(ctx);
    }

    @Action('getMovie')
    public async getMovieAction(@Ctx() ctx: Context) {
        ctx.answerCbQuery('❤');
        this.logEvent(ctx, BotAuditEventType.ActionGetMovie);

        return this.getRandomMovieResponse(ctx);
    }

    @On('text')
    public async onText(@Ctx() ctx: Context) {
        this.logEvent(ctx, BotAuditEventType.Text, { text: (ctx.message as any).text });

        await ctx.reply('Жизнь неожиданна прекрасна',
            Markup.inlineKeyboard([
                Markup.button.callback('🎬 Что посмотреть?', 'getMovie'),
            ]),
        );
    }

    private async getRandomMovieResponse(ctx: Context) {
        const movie = await this.movieQueryService.getRandom();

        await ctx.replyWithMarkdown(`*${movie.name}*

${movie.description}

${movie.link}`);
    }

    private logEvent(ctx: Context, eventType: BotAuditEventType, data: object = {}): void {
        const from = ctx.message?.from ?? ctx.callbackQuery?.from;

        botAuditLogService.logEvent({
            eventType,
            userId: `${from.id}`,
            data: {
                ...data,
                username: from.username,
                firstName: from.first_name,
            },
        });
    }
}